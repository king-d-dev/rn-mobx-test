import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { uuidv4 } from "../../utils"

/**
 * Model description here for TypeScript hints.
 */
export const AuthStoreModel = types
  .model({
    email: types.maybeNull(types.string),
    sessionId: types.maybe(types.string),
    accessToken: types.maybe(types.string),
    expiresAt: types.maybe(types.string),
    fetching: types.optional(types.boolean, false),
    code: types.optional(types.number, 0),
    field: types.maybeNull(types.string),
    message: types.maybeNull(types.string),
  })
  .views((self) => ({
    isSignedIn() {
      return !!self.accessToken
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    authSetToken: function (accessToken: string, expiresAt: string | undefined) {
      self.accessToken = accessToken
      self.expiresAt = expiresAt
    },
    authGenerateSessionId: function () {
      self.sessionId = uuidv4()
    },
    authLogout: function () {
      self.email = null
      self.sessionId = undefined
      self.accessToken = undefined
      self.expiresAt = undefined
      self.fetching = false
      self.code = 0
      self.field = null
      self.message = null
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type AuthStoreType = Instance<typeof AuthStoreModel>
export interface AuthStore extends AuthStoreType {}
type AuthStoreSnapshotType = SnapshotOut<typeof AuthStoreModel>
export interface AuthStoreSnapshot extends AuthStoreSnapshotType {}
export const createAuthStoreDefaultModel = () => types.optional(AuthStoreModel, {})
