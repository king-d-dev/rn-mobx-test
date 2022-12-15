import { ViewStyle } from "react-native"

export interface FooterButtonProps {
  fixed?: boolean
  text: string
  onPress: () => void
  customStyle?: ViewStyle
  customWrapperStyle?: ViewStyle
  hasArrow?: boolean
  testID?: string
}
