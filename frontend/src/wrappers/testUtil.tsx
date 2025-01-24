import { ChakraProvider } from '@chakra-ui/react'
import { render as rtlRender } from '@testing-library/react'
import React from 'react'
import { system } from 'utils/theme'

function render(ui: React.ReactElement, options = {}) {
  return rtlRender(ui, {
    wrapper: ({ children }) => <ChakraProvider value={system}>{children}</ChakraProvider>,
    ...options,
  })
}

export * from '@testing-library/react'

export { render }
