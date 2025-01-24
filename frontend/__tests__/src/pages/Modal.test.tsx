import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ChakraProvider } from '@chakra-ui/react'
import { system } from 'utils/theme'

import { Modal } from 'components/Modal'

// Mock the portal container
beforeEach(() => {
  const portalRoot = document.createElement('div')
  portalRoot.setAttribute('id', 'portal-root')
  document.body.appendChild(portalRoot)
})

afterEach(() => {
  document.body.innerHTML = ''
})

// Mock FontAwesomeIcon since we don't need to test the actual icon rendering
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="mock-icon" />,
}))

describe('Modal Component', () => {
  const defaultProps = {
    title: 'Test Modal',
    summary: 'Test Summary',
    hint: 'Test Hint',
    isOpen: true,
    onClose: jest.fn(),
    button: {
      label: 'Test Button',
      onclick: jest.fn(),
      url: 'https://example.com/issue/123',
    },
    children: undefined as React.ReactNode | undefined,
  }

  const renderModal = (props = defaultProps) => {
    return render(
      <ChakraProvider value={system}>
        <Modal {...props} />
      </ChakraProvider>
    )
  }

  it('renders nothing when isOpen is false', () => {
    renderModal({ ...defaultProps, isOpen: false })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the action button and handles its events', async () => {
    const onclick = jest.fn()
    renderModal({ ...defaultProps, button: { ...defaultProps.button, onclick } })

    const actionButton = screen.getByRole('link', { name: /Test Button/i })
    expect(actionButton).toBeInTheDocument()
  })

  it('renders modal with all components when isOpen is true', () => {
    renderModal()

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Test Modal')).toBeInTheDocument()
    expect(screen.getByText('Test Summary')).toBeInTheDocument()
    expect(screen.getByText('Test Hint')).toBeInTheDocument()
    expect(screen.getByText('How to tackle it')).toBeInTheDocument()
  })

  it('renders children content when provided', () => {
    renderModal({
      ...defaultProps,
      children: <div data-testid="child-content">Child Content</div>,
    })

    expect(screen.getByTestId('child-content')).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const onClose = jest.fn()
    renderModal({ ...defaultProps, onClose })

    const closeButton = screen.getByRole('button', { name: /close modal/i })
    await userEvent.click(closeButton)

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when clicking outside the modal', () => {
    const onClose = jest.fn()
    renderModal({ ...defaultProps, onClose })

    const overlay = screen.getByRole('presentation')
    fireEvent.mouseDown(overlay)

    expect(onClose).toHaveBeenCalledTimes(0)
  })

  it('handles escape key press', () => {
    const onClose = jest.fn()
    renderModal({ ...defaultProps, onClose })

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' })

    expect(onClose).toHaveBeenCalledTimes(2)
  })

  it('manages body overflow style correctly', () => {
    const { unmount } = renderModal()

    expect(document.body.style.overflow).toBe('hidden')

    unmount()

    expect(document.body.style.overflow).toBe('')
  })

  it('renders with correct accessibility attributes', () => {
    renderModal()

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title')
    expect(dialog).toHaveAttribute('tabIndex', '-1')
  })

  it('renders without hint section when hint prop is not provided', () => {
    const propsWithoutHint = {
      ...defaultProps,
      hint: undefined,
    }

    renderModal(propsWithoutHint)

    expect(screen.queryByText('How to tackle it')).not.toBeInTheDocument()
  })

  describe('Event Listener Management', () => {
    it('cleans up event listeners on unmount', () => {
      const addEventListenerSpy = jest.spyOn(document, 'addEventListener')
      const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener')

      const { unmount } = renderModal()

      expect(addEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function))

      unmount()

      expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function))

      addEventListenerSpy.mockRestore()
      removeEventListenerSpy.mockRestore()
    })
  })
})