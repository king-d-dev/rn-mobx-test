import { Platform, TextStyle } from "react-native"

/**
 * You can find a list of available fonts on both iOS and Android here:
 * https://github.com/react-native-training/react-native-fonts
 *
 * If you're interested in adding a custom font to your project,
 * check out the readme file in ./assets/fonts/ then come back here
 * and enter your new font name. Remember the Android font name
 * is probably different than iOS.
 * More on that here:
 * https://github.com/lendup/react-native-cross-platform-text
 *
 * The various styles of fonts are defined in the <Text /> component.
 */
export const typography = {
  /**
   * The primary font. Used in most places.
   */
  primary: Platform.select({ ios: "SourceSansPro-600", android: "normal" }),

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: "Arial", android: "sans-serif" }),

  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: "Courier", android: "monospace" }),
}

export const fontSizes = {
  button: 13,
  bannerText: 13,
  bannerTitle: 16,
  h1: 30,
  h2: 24,
  h3: 20,
}

type FontWeight = TextStyle["fontWeight"]

type FontWeights = { [key: string]: FontWeight }

export const fontWeights: FontWeights = {
  bold: "800",
  semiBold: "600",
  medium: "500",
}
