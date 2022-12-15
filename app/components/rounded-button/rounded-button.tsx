import React from "react"
import { Text, StyleSheet, TouchableOpacity } from "react-native"

import { color, fontSizes, spacing } from "@theme"
import { RoundedButtonProps } from "./rounded-button.props"

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.buttonBackground,
    borderRadius: 5,
    height: 45,
    justifyContent: "center",
    marginVertical: spacing[3],
  },
  buttonText: {
    color: color.buttonText,
    fontSize: fontSizes.button,
    marginVertical: spacing[3],
    textAlign: "center",
  },
})

const getText = (props) => {
  const buttonText = props.text || props.children || ""
  return buttonText.toUpperCase()
}

export const RoundedButton = (props: RoundedButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress} disabled={props.active === false}>
      <Text style={styles.buttonText}>{getText(props)}</Text>
    </TouchableOpacity>
  )
}
