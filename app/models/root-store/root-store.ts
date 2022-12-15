import { IncidentStore } from "../incident-store"

export class RootStore {
  incidentsStore: IncidentStore

  constructor() {
    this.incidentsStore = new IncidentStore(this)
  }
}
