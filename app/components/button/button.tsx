import * as React from "react"
import { Pressable, ActivityIndicator } from "react-native"
import { Text } from "../text/text"
import { viewPresets, textPresets } from "./button.presets"
import { ButtonProps } from "./button.props"
import { mergeAll, flatten } from "ramda"

import { color } from "@theme"
/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props: ButtonProps) {
  // grab the props
  const { preset = "primary", text, style: styleOverride, textStyle: textStyleOverride, children, loading, ...rest } = props

  // @ts-ignore: TODO fix the type of the next line
  const viewStyle = mergeAll(flatten([viewPresets[preset] || viewPresets.primary, styleOverride]))
  // @ts-ignore: TODO fix the type of the next line
  const textStyle = mergeAll(flatten([textPresets[preset] || textPresets.primary, textStyleOverride]))

  const content = children || <Text text={text} style={textStyle} />

  return (
    <Pressable style={viewStyle} {...rest}>
      {!loading ? content : <ActivityIndicator animating={loading} size="small" color={color.palette.white[0]} />}
    </Pressable>
  )
}
