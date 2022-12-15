import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native"
import { ButtonPresetNames } from "./button.presets"

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * Specify name of icon for icon buttons
   */
  icon?: string

  /**
   * The text to display if not using nested components.
   */
  text?: string

  /**
   * An optional flag for showing a spinner if the app is waiting for another action
   */
  loading?: boolean

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * One of the different types of text presets.
   */
  preset?: ButtonPresetNames

  /**
   * One of the different types of text presets.
   */
  children?: React.ReactNode
}
