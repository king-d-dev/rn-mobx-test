import React from "react"
import { Image, StyleSheet, View } from "react-native"

import sharedStyles from "@styles/shared"
import { color } from "@theme"

const styles = StyleSheet.create({
  ...sharedStyles,
  container: { ...sharedStyles.container, backgroundColor: color.background },
  image: {
    height: 200,
    resizeMode: "contain",
    width: 200,
  },
})

export function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("@assets/images/icon.png")} />
    </View>
  )
}
