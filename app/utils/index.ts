export const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 * A "modern" sleep statement.
 *
 * @param ms The number of milliseconds to wait.
 */
export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const convertToString = (input) => {
  if (input) {
    if (typeof input === "string") {
      return input
    }

    return String(input)
  }
  return ""
}

// convert string to words
export const toWords = (input) => {
  input = convertToString(input)

  const regex = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g

  return input.match(regex)
}

// convert the input array to camel case
const toCamelCase = (inputArray) => {
  let result = ""

  for (let i = 0, len = inputArray.length; i < len; i++) {
    const currentStr = inputArray[i]

    let tempStr = currentStr.toLowerCase()

    if (i !== 0) {
      // convert first letter to upper case (the word is in lowercase)
      tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1)
    }

    result += tempStr
  }

  return result
}

export const toCamelCaseString = (input) => {
  const words = toWords(input)

  return toCamelCase(words)
}
