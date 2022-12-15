import { GeneralApiProblem } from "./api-problem"
import { Character } from "../../models/character/character"
import { API_STATUS } from "./api-constants"

export interface User {
  id: number
  name: string
}

export type GetUsersResult = { kind: API_STATUS.Ok; users: User[] } | GeneralApiProblem
export type GetUserResult = { kind: API_STATUS.Ok; user: User } | GeneralApiProblem

export type GetCharactersResult = { kind: API_STATUS.Ok; characters: Character[] } | GeneralApiProblem
export type GetCharacterResult = { kind: API_STATUS.Ok; character: Character } | GeneralApiProblem
