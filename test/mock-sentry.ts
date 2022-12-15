jest.mock("@sentry/react-native", () => {
  return {
    Sentry: () => null,
  }
})

export {}
