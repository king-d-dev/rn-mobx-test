import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

import { color, fontSizes, spacing } from "@theme"
import { FullButtonProps } from "./full-button.props"

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.buttonBackground,
    borderBottomColor: color.buttonBorder,
    borderBottomWidth: 1,
    borderTopColor: color.buttonBorder,
    borderTopWidth: 1,
    marginVertical: 5,
  },
  buttonText: {
    color: color.text,
    fontSize: fontSizes.button,
    margin: spacing[4],
    textAlign: "center",
  },
})

export const FullButton = (props: FullButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, props.styles]} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text && props.text.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}
