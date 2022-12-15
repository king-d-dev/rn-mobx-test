import * as SecureStorage from "@utils/secure-storage"

import { Api } from "../services/api"
import { ACCESS_TOKEN_KEY } from "@constants"

/**
 * The environment is a place where services and shared dependencies between
 * models live.  They are made available to every model via dependency injection.
 */
export class Environment {
  constructor() {
    this.api = new Api()
  }

  async setup() {
    // allow each service to setup
    await this.api.setup()

    const token = await SecureStorage.get(ACCESS_TOKEN_KEY)
    if (token) {
      this.api.apisauce.setHeader("Authorization", `Bearer ${token}`)
    }
  }

  /**
   * Our api.
   */
  api: Api
}
