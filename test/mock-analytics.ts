jest.mock("@react-native-firebase/analytics", () => {
  return {
    analytics: () => null,
  }
})

export {}
