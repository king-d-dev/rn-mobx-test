// we always make sure 'react-native' gets included first
import "react-native"

// libraries to mock
import "./mock-async-storage"
import "./mock-secure-storage"
import "./mock-crashlytics"
import "./mock-analytics"
import "./mock-sentry"

declare global {
  let __TEST__
}
