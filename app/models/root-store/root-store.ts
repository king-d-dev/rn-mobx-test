import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { SettingsModel } from "../settings/settings"
import { CharacterStoreModel } from "../character-store/character-store"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  settingsStore: types.optional(SettingsModel, {} as any),
  characterStore: types.optional(CharacterStoreModel, {} as any),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
