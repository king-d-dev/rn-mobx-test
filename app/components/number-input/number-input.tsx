import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

import { spacing, color } from "@theme"
import { NumberInputProps } from "./number-input.props"

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderColor: color.buttonBorder,
    borderWidth: 1,
    color: color.buttonText,
    flexDirection: "row",
    height: 25,
    justifyContent: "center",
    textAlign: "center",
    width: 25,
  },
  value: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: 40,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing[3],
  },
})

export const NumberInput = (props: NumberInputProps) => {
  const handleValueChange = (value: number) => {
    if (value < 0) {
      value = 0
    }
    props.onValueChange(value)
  }
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={() => {
          handleValueChange(props.value - 1)
        }}>
        <Text>-</Text>
      </TouchableOpacity>
      <View style={[styles.button, styles.value]}>
        <Text>{props.value || 0}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={() => {
          handleValueChange(props.value + 1)
        }}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  )
}
