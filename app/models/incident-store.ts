import { Api } from "@services/api"
import { action, makeAutoObservable, runInAction } from "mobx"

export class IncidentStore {
  api = new Api()
  incidents = []
  rootStore
  status: "IDLE" | "LOADING" | "DONE" = "IDLE"

  constructor(rootStore) {
    makeAutoObservable(this, { api: false, rootStore: false, getIncidents: action })
    this.rootStore = rootStore
    this.api.setup()
  }

  async getIncidents() {
    this.status = "LOADING"
    this.incidents = []
    const response = await this.api.getIncidents()
    if (response.ok) {
      runInAction(() => {
        this.incidents = response.data
        this.status = "DONE"
      })
    }
  }
}
