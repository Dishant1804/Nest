export const mockProjectDetailsData = {
  project: {
    contributorsCount: 1200,
    forksCount: 10,
    issuesCount: 10,
    isActive: true,
    key: 'example-project',
    languages: ['Python', 'GraphQL', 'JavaScript'],
    leaders: ['alice', 'bob'],
    level: 'Lab',
    name: 'Test Project',
    repositoriesCount: 3,
    starsCount: 2200,
    summary: 'An example project showcasing GraphQL and Django integration.',
    topContributors: Array.from({ length: 15 }, (_, i) => ({
      avatarUrl: `https://avatars.githubusercontent.com/avatar${i + 1}.jpg`,
      contributionsCount: 30 - i,
      login: `contributor${i + 1}`,
      name: `Contributor ${i + 1}`,
    })),
    topics: ['graphql', 'django', 'backend'],
    type: 'Tool',
    updatedAt: '2025-02-07T12:34:56Z',
    url: 'https://github.com/example-project',
    recentReleases: [
      {
        name: 'v1.2.0',
        tagName: 'v1.2.0',
        isPreRelease: false,
        publishedAt: '2025-01-20T10:00:00Z',
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/avatar3.png',
          login: 'charlie_dev',
          name: 'Charlie Dev',
        },
      },
    ],
    recentIssues: [
      {
        title: 'Fix authentication bug',
        createdAt: '2025-02-05T15:20:30Z',
        repositoryName: 'test-repo',
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/avatar4.png',
          login: 'dave_debugger',
          url: 'https://github.com/arkid15r',
          name: 'Dave Debugger',
        },
      },
    ],
    repositories: [
      {
        contributorsCount: 40,
        forksCount: 12,
        key: 'repo-1',
        name: 'Repo One',
        openIssuesCount: 6,
        organization: {
          login: 'OWASP',
        },
        starsCount: 95,
        subscribersCount: 15,
        url: 'https://github.com/example-project/repo-1',
      },
      {
        contributorsCount: 30,
        forksCount: 8,
        key: 'repo-2',
        name: 'Repo Two',
        openIssuesCount: 3,
        organization: {
          login: 'OWASP',
        },
        starsCount: 60,
        subscribersCount: 10,
        url: 'https://github.com/example-project/repo-2',
      },
    ],
  },
  recentPullRequests: [
    {
      title: 'Test Pull Request 1',
      createdAt: 1727390000,
      url: 'https://github.com/test-org/test-repo-1/pull/1',
      author: {
        login: 'user1',
        avatarUrl: 'https://avatars.githubusercontent.com/u/11111?v=4',
      },
    },
    {
      title: 'Test Pull Request 2',
      createdAt: 1727380000,
      url: 'https://github.com/test-org/test-repo-2/pull/2',
      author: {
        login: 'user2',
        avatarUrl: 'https://avatars.githubusercontent.com/u/22222?v=4',
      },
    },
  ],
}
