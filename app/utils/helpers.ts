import { Platform } from "react-native"

export const snakeToCamelCase = (key) => {
  return key.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace("_", "")
  })
}

export const getDateString = (date: string | Date): string => new Date(date).toLocaleDateString()

export const getReadableApiError = (response): string => {
  switch (response.problem) {
    case "CONNECTION_ERROR":
    case "NETWORK_ERROR":
      return "Unable to connect, check your internet connection."
    case "TIMEOUT_ERROR":
      return "Connection timed out, please try again."
    case "SERVER_ERROR":
      return "Unknown server error, contact support."
    case "UNKNOWN_ERROR":
      return "Unknown error, contact support."
    case "CANCEL_ERROR":
      return "Request cancelled."
    case "CLIENT_ERROR":
      switch (response.status) {
        case 401:
          return "You are not authorized to access this content, please login and try again."
        case 403:
          return "Access forbidden."
        case 404:
          return "Couldn't find what you're looking for."
      }
  }

  return "Oops, something went wrong"
}

export const parseCookie = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      if (v.length > 1) {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())
      }
      return acc
    }, {})

export const truncateText = (text: string, characterLimit: number): string =>
  text?.length > characterLimit ? text?.substring(0, characterLimit - 3) + "..." : text

export const fileNameFromPath = (path: string) => path.substring(path.lastIndexOf("/") + 1)

export const parseApiCoordinatesToArray = (apiCoordinates: string): number[][] => {
  let stringWithoutType = apiCoordinates.match(/\((.*?)\)/gi)[0]
  // TODO: revisit the regex so we can remove this if statement
  if (stringWithoutType.includes("((")) {
    stringWithoutType = stringWithoutType.replace("((", "(")
  }
  const stringArray = stringWithoutType.substring(1, stringWithoutType.length - 1).split(",")
  return stringArray.map((value) => [...value.split(" ").map((value) => Number(value))])
}

export const isIOS = () => Platform.OS === "ios"
