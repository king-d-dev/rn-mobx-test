import { Platform } from "react-native"
import { color } from "./color"

interface TextFont {
  fontFamily: string
  fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
}

const text = (family = "SourceSansPro"): { bold: TextFont; semiBold: TextFont } => {
  return {
    bold: {
      fontFamily: `${family}-700`,
      fontWeight: Platform.select({ ios: "700", android: undefined }),
    },
    semiBold: {
      fontFamily: `${family}-600`,
      fontWeight: Platform.select({ ios: "600", android: undefined }),
    },
  }
}

const size = {
  h1: 28,
  h2: 24,
  h3: 20,
  h4: 18,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 18,
  medium: 16,
  small: 14,
  tiny: 8.5,
  title: 24,
  iconDefault: 24,
  iconLarge: 26,
}

const style = {
  h1: {
    ...text().bold,
    fontSize: size.h1,
    lineHeight: 36,
    color: color.text,
  },
  h2: {
    ...text().bold,
    fontSize: size.h2,
    lineHeight: 36,
    color: color.text,
  },
  h3: {
    ...text().bold,
    fontSize: size.h3,
  },
  h4: {
    ...text().semiBold,
    fontSize: size.h4,
  },
  h5: {
    ...text().semiBold,
    fontSize: size.h5,
  },
  h6: {
    ...text().semiBold,
    fontSize: size.h6,
  },
  normal: {
    ...text().semiBold,
    fontSize: size.regular,
    color: color.text,
  },
  description: {
    ...text().semiBold,
    fontSize: size.medium,
    color: color.text,
  },
  button: {
    ...text().bold,
    fontSize: size.regular,
  },
}

const align = {
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
  center: {
    textAlign: "center",
  },
}

export default {
  text,
  size,
  style,
  align,
}
