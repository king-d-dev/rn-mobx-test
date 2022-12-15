import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { CharacterModel, CharacterSnapshot } from "../character/character"
import { CharacterApi } from "@services/api/character-api"
import { withEnvironment } from "../extensions/with-environment"
import { API_STATUS } from "@services/api/api-constants"
import { withStatus } from "../extensions/with-status"

/**
 * Example store containing Rick and Morty characters
 */
export const CharacterStoreModel = types
  .model("CharacterStore")
  .props({
    characters: types.optional(types.array(CharacterModel), []),
    errorMessage: "",
  })
  .extend(withEnvironment)
  .extend(withStatus)
  .actions((self) => ({
    saveCharacters: (characterSnapshots: CharacterSnapshot[]) => {
      self.characters.replace(characterSnapshots)
    },
  }))
  .actions((self) => ({
    loadCharacters: async () => {
      self.setStatus("pending")
      const characterApi = new CharacterApi(self.environment.api)
      const result = await characterApi.getCharacters()

      if (result.kind === API_STATUS.Ok) {
        self.saveCharacters(result.characters)
        self.setStatus("done")
      } else {
        self.errorMessage = result.kind
        self.setStatus("error")
      }
    },
  }))

type CharacterStoreType = Instance<typeof CharacterStoreModel>
export interface CharacterStore extends CharacterStoreType {}
type CharacterStoreSnapshotType = SnapshotOut<typeof CharacterStoreModel>
export interface CharacterStoreSnapshot extends CharacterStoreSnapshotType {}
export const createCharacterStoreDefaultModel = () => types.optional(CharacterStoreModel, {})
