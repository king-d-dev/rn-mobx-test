import { LinkingOptions } from "@react-navigation/native"

import { NAVIGATION_SCREENS } from "@constants"

export const linking: LinkingOptions = {
  prefixes: ["https://app.akadenia.com/", "akadenia://", "Akadenia://"],
  config: {
    screens: {
      [NAVIGATION_SCREENS.home.path]: "home",
      [NAVIGATION_SCREENS.demoList.path]: "demo",
    },
  },
}
