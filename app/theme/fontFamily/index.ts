import * as Font from "expo-font"

export const initFonts = async () => {
  await Font.loadAsync({
    "SourceSansPro-700": require("./SourceSansPro-700.ttf"),
    "SourceSansPro-600": require("./SourceSansPro-600.ttf"),
  })
}
