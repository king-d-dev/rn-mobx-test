import React from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"

import { color, fontSizes, spacing } from "@theme"
import { LinkButtonProps } from "./link-button.props"

const styles = StyleSheet.create({
  link: {
    color: color.primary,
    fontSize: fontSizes.h3,
    fontWeight: "bold",
    paddingBottom: spacing[3],
    textAlign: "center",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
})

const getText = (props) => {
  const buttonText = props.text || props.children || ""
  return buttonText.toUpperCase()
}

export const LinkButton = (props: LinkButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.active === false}>
      <Text style={styles.link}>{getText(props)}</Text>
    </TouchableOpacity>
  )
}
