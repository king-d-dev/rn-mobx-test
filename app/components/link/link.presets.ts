import { ViewStyle, TextStyle } from "react-native"
import { color } from "@theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
}

const BASE_TEXT: TextStyle = {}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets = {
  /**
   * A smaller piece of secondard information.
   */
  primary: { ...BASE_VIEW } as ViewStyle,

  /**
   * A button without extras.
   */
  link: {
    ...BASE_VIEW,
    // paddingHorizontal: 0,
    // paddingVertical: 0,
    // alignItems: "flex-start",
  } as ViewStyle,
}

export const textPresets = {
  primary: {
    ...BASE_TEXT,
    fontSize: 14,
    color: color.link,
  } as TextStyle,
  link: {
    ...BASE_TEXT,
    color: color.link,
    paddingHorizontal: 0,
    paddingVertical: 0,
  } as TextStyle,
}

/**
 * A list of preset names.
 */
export type LinkPresetNames = keyof typeof textPresets
