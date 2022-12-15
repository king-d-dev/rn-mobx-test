// For more info on how to write Detox tests, see the official docs:
// https://github.com/wix/Detox/blob/master/docs/README.md

import { expect, element, by } from "detox"
import { reloadApp } from "./reload"

describe("Happy Path", () => {
  beforeAll(async () => {
    await reloadApp()
  })

  beforeEach(async () => {})

  it("should have home scren", async () => {
    await expect(element(by.id("HomeScreen"))).toBeVisible()
  })

  // it("should go to next screen after tap", async () => {
  //   await element(by.id("next-screen-button")).tap()
  //   await expect(element(by.id("DemoScreen"))).toBeVisible()
  // })
})
