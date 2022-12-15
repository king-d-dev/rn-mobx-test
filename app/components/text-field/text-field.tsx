import React from "react"
import { TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native"
import { color, spacing, typography } from "@theme"
import { Text } from "../text/text"
import { mergeAll, flatten } from "ramda"

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingVertical: spacing[3],
}

// the base styling for the TextInput
const INPUT: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  minHeight: 44,
  fontSize: 18,
  backgroundColor: color.background,
}

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
}

export interface TextFieldProps extends TextInputProps {
  /**
   * The Placeholder text
   */
  placeholder?: string

  /**
   * The label text
   */
  label?: string

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: ViewStyle | ViewStyle[]

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: TextStyle | TextStyle[]

  /**
   * Various look & feels.
   */
  preset?: keyof typeof PRESETS

  forwardedRef?: any
}

const enhance = (style, styleOverride) => {
  return mergeAll(flatten([style, styleOverride]))
}

/**
 * A component which has a label and an input together.
 */
export function TextField(props: TextFieldProps) {
  const {
    placeholder,
    label,
    preset = "default",
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    ...rest
  } = props
  let containerStyle: ViewStyle = { ...CONTAINER, ...PRESETS[preset] }
  containerStyle = enhance(containerStyle, styleOverride)

  let inputStyle: TextStyle = INPUT
  inputStyle = enhance(inputStyle, inputStyleOverride)
  const actualPlaceholder = placeholder

  return (
    <View style={containerStyle}>
      <Text preset="fieldLabel" text={label} />
      <TextInput
        placeholder={actualPlaceholder}
        placeholderTextColor={color.palette.grey[0]}
        underlineColorAndroid={color.transparent}
        {...rest}
        style={inputStyle}
        ref={forwardedRef}
      />
    </View>
  )
}
