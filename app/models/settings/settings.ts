import { types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"

export const SettingsModel = types
  .model({
    mode: types.optional(types.string, ""),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    setMode: function (mode) {
      self.mode = mode
    },
  }))
