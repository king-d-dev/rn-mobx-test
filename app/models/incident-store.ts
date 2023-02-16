import { Api } from "@services/api"
import { action, makeAutoObservable, runInAction } from "mobx"

const repeatArrayElements = (array: any[], n: number) => {
  if (array.length > n) {
    return array.slice(0, n)
  }
  return [...new Array(Math.ceil(n / array.length))].fill(array).flat().slice(0, n)
}

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

  clearIncidents() {
    // this.incidents.splice(0, this.incidents.length)
    this.incidents = []
    console.log("DDD", this.incidents.length)
  }

  async getIncidents(multiplier?: number) {
    this.status = "LOADING"
    this.incidents = []
    const response = await this.api.getIncidents()
    if (response.ok) {
      const incidents = multiplier ? repeatArrayElements(response.data, multiplier) : response.data

      runInAction(() => {
        this.incidents = incidents
        this.status = "DONE"
      })
    }
  }
}
