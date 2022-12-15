import { ViewStyle } from "react-native"

export interface BaseWebViewProps {
  uri: string
  lastRefresh?: number
  onNavigationStateChange?: (value: any) => void
  spinnerSubTitle: string
  extraStyles?: ViewStyle
}
