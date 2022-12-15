/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import "react-native-gesture-handler"
import "./utils/ignore-warnings"
import React, { useState, useEffect, useRef } from "react"
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
// import analytics from "@react-native-firebase/analytics"
import { useFonts } from "expo-font"

// import * as Sentry from "@sentry/react-native"

import { AppNavigator, navigationRef } from "./navigators"
import { RootStore, RootStoreProvider } from "./models"
import { ErrorBoundary } from "./screens/error/error-boundary"

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
import { enableScreens } from "react-native-screens"
enableScreens()

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE"
let count = 0

/**
 * This is the root component of our app.
 */
function App() {
  const rootStore = new RootStore()
  const routeNameRef = useRef<string>()
  // const [rootStore, setRootStore] = useState<RootStore>()

  const [fontsLoaded] = useFonts({
    "SourceSansPro-600": require("../assets/fonts/SourceSansPro-600.ttf"),
    "SourceSansPro-700": require("../assets/fonts/SourceSansPro-700.ttf"),
  })

  useEffect(() => {
    const init = async () => {
      // setupRootStore().then(setRootStore)
    }
    init()

    // Sentry.init({
    //   dsn: "<SETUP PROPER SENTRY LINK>",
    //   enabled: false // TODO: replace false with !__DEV__ when dsn is populated
    // })
  }, [])

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color.
  // In iOS: application:didFinishLaunchingWithOptions:
  // In Android: https://stackoverflow.com/a/45838109/204044
  // You can replace with your own loading component if you wish.
  if (!rootStore || !fontsLoaded) return null

  console.log("RENDING APP", count++)

  // otherwise, we're ready to render the app
  return (
    <RootStoreProvider value={rootStore}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ErrorBoundary catchErrors={"always"}>
          <AppNavigator
            onReady={() => (routeNameRef.current = navigationRef.current.getCurrentRoute().name)}
            onStateChange={async () => {
              const previousRouteName = routeNameRef.current
              const currentRouteName = navigationRef.current.getCurrentRoute().name

              if (previousRouteName !== currentRouteName) {
                // await analytics().logEvent(`Screen_${currentRouteName}`)
              }

              routeNameRef.current = currentRouteName
            }}
          />
        </ErrorBoundary>
      </SafeAreaProvider>
    </RootStoreProvider>
  )
}

export default App
