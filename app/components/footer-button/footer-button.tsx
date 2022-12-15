import React, { useEffect, useState } from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"

import { spacing, color } from "@theme"
import { CLICK_DEBOUNCE_DURATION } from "@constants"
import { FooterButtonProps } from "./footer-button.props"

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: color.primary,
    borderRadius: 60,
    display: "flex",
    flexDirection: "row",
    height: 60,
    justifyContent: "center",
    overflow: "hidden",
    width: "90%",
  },
  buttonText: {
    color: color.text,
    letterSpacing: 1.5,
    marginRight: 0,
    padding: 0,
    textAlign: "right",
    textTransform: "uppercase",
  },
  buttonTextWithArrow: {
    marginRight: spacing[2],
  },
  inlineFooterWrapper: {
    position: "relative",
  },
  footer: {
    padding: spacing[5],
  },
  fixedFooterWrapper: {},
})

export const FooterButton = (props: FooterButtonProps) => {
  const [disabled, setDisabled] = useState(false)
  const [mounted, setMounted] = useState(false)

  const handlePress = () => {
    mounted && setDisabled(true)
    props.onPress()
    setTimeout(() => {
      mounted && setDisabled(false)
    }, CLICK_DEBOUNCE_DURATION)
  }

  useEffect(() => {
    setMounted(true)
    return setMounted(false)
  }, [])

  return (
    <View
      testID={props.testID}
      style={[styles.footer, props.fixed ? styles.fixedFooterWrapper : styles.inlineFooterWrapper, props.customWrapperStyle]}>
      <TouchableOpacity disabled={disabled} activeOpacity={1} style={[styles.button, props.customStyle]} onPress={handlePress}>
        <Text style={[styles.buttonText, props.hasArrow && styles.buttonTextWithArrow]}>{props.text}</Text>
        {/* {props.hasArrow && <Icon name="md-arrow-forward" size={24} color={Colors.white} />} */}
      </TouchableOpacity>
    </View>
  )
}

FooterButton.defaultProps = { hasArrow: true }
