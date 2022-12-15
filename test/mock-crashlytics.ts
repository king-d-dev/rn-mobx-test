jest.mock("@react-native-firebase/crashlytics", () => {
  return {
    crashlytics: () => null,
  }
})

export {}
