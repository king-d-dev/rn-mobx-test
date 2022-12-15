import { ViewStyle, TextStyle, TouchableOpacityProps } from "react-native"
import { LinkPresetNames } from "./link.presets"

export interface LinkProps extends TouchableOpacityProps {
  /**
   * The text to display if not using nested components.
   */
  text?: string

  loading?: boolean

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle | ViewStyle[]

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: TextStyle | TextStyle[]

  /**
   * One of the different types of text presets.
   */
  preset?: LinkPresetNames

  /**
   * One of the different types of text presets.
   */
  children?: React.ReactNode
}
