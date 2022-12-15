import { device } from "detox"

export const goBack = async () => {
  if (device.getPlatform() === "android") {
    await device.pressBack() // Android only
  } else {
    await element(by.traits(["button"]))
      .atIndex(0)
      .tap()
  }
}
