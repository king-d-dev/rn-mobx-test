import { ApiResponse } from "apisauce"

import { API_STATUS } from "./api-constants"

export type GeneralApiProblem =
  /**
   * Times up.
   */
  | { kind: API_STATUS.TimeOut; temporary: true }
  /**
   * Cannot connect to the server for some reason.
   */
  | { kind: API_STATUS.CannotConnect; temporary: true }
  /**
   * The server experienced a problem. Any 5xx error.
   */
  | { kind: API_STATUS.Server }
  /**
   * We're not allowed because we haven't identified ourself. This is 401.
   */
  | { kind: API_STATUS.Unauthorized }
  /**
   * We don't have access to perform that request. This is 403.
   */
  | { kind: API_STATUS.Forbidden }
  /**
   * Unable to find that resource.  This is a 404.
   */
  | { kind: API_STATUS.NotFound }
  /**
   * All other 4xx series errors.
   */
  | { kind: API_STATUS.Rejected }
  /**
   * Something truly unexpected happened. Most likely can try again. This is a catch all.
   */
  | { kind: API_STATUS.Unknown; temporary: true }
  /**
   * The data we received is not in the expected format.
   */
  | { kind: API_STATUS.BadData }

/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export function getGeneralApiProblem(response: ApiResponse<any>): GeneralApiProblem | null {
  switch (response.problem) {
    case "CONNECTION_ERROR":
      return { kind: API_STATUS.CannotConnect, temporary: true }
    case "NETWORK_ERROR":
      return { kind: API_STATUS.CannotConnect, temporary: true }
    case "TIMEOUT_ERROR":
      return { kind: API_STATUS.TimeOut, temporary: true }
    case "SERVER_ERROR":
      return { kind: API_STATUS.Server }
    case "UNKNOWN_ERROR":
      return { kind: API_STATUS.Unknown, temporary: true }
    case "CLIENT_ERROR":
      switch (response.status) {
        case 401:
          return { kind: API_STATUS.Unauthorized }
        case 403:
          return { kind: API_STATUS.Forbidden }
        case 404:
          return { kind: API_STATUS.NotFound }
        default:
          return { kind: API_STATUS.Rejected }
      }
    case "CANCEL_ERROR":
    default:
      return null
  }
}

export const handleGenericResponse = (response): GeneralApiProblem | void | { kind: string } => {
  if (!response.ok) {
    return getGeneralApiProblem(response)
  }

  return { kind: "ok" }
}
