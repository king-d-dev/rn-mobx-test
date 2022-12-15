import * as React from "react"
import { TouchableOpacity, ActivityIndicator } from "react-native"
import { Text } from "../text/text"
import { viewPresets, textPresets } from "./link.presets"
import { LinkProps } from "./link.props"
import { mergeAll, flatten } from "ramda"

import { color } from "@theme"
/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Link(props: LinkProps) {
  // grab the props
  const { preset = "primary", text, style: styleOverride, textStyle: textStyleOverride, children, loading, ...rest } = props

  const viewStyle = mergeAll(flatten([viewPresets[preset] || viewPresets.primary, styleOverride]))
  const textStyle = mergeAll(flatten([textPresets[preset] || textPresets.primary, textStyleOverride]))

  const content = children || <Text text={text} style={textStyle} />

  return (
    <TouchableOpacity style={viewStyle} {...rest}>
      {!loading ? content : <ActivityIndicator animating={loading} size="small" color={color.palette.blue[0]} />}
    </TouchableOpacity>
  )
}
