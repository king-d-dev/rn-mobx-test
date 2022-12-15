import { NavigatorParamList } from "@navigators"

export const STORE_URI = "https://akadenia.com/"
export const CHECKOUT_URI = `${STORE_URI}cart/`
export const LOGIN_URI = `${STORE_URI}account/login`
export const ACCOUNT_URI = `${STORE_URI}account`
export const FAQ_URI = `${STORE_URI}/pages/frequently-asked-questions`

export const CONTACT_US_EMAIL = "help@akadenia.com"

export const CLICK_DEBOUNCE_DURATION = 300 // in millisecond

export const PRIVACY_MESSAGE =
  "Simply put, we respect your privacy and will never transfer, share, showcase your photos anywhere without your explicit permission. This begins with providing Akadenia access to the photos on your phone. By providing access, you will be able to create customized projector reels for use in Akadenia."

interface INavigationScreensType {
  [name: string]: {
    title: string
    name: keyof NavigatorParamList
  }
}

export const NAVIGATION_SCREENS: INavigationScreensType = {
  home: {
    title: "Home",
    name: "home",
  },
  demoList: {
    title: "Rick & Morty",
    name: "demoList",
  },
}

export const NAVIGATION_ACTIONS = {
  logout: "logout",
  faq: "faq",
  review: "review",
  contactUs: "contactUs",
  share: "share",
}

export const SNACKBAR_DURATION = 2500

export const TEST_IDS = {
  homeScreen: "HomeScreen",
  demoListScreen: "DemoListScreen",
}

export const ACCESS_TOKEN_KEY = "token"
export const USER_DATA_KEY = "user"
