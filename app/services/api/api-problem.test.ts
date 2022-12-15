import { getGeneralApiProblem } from "./api-problem"
import { ApiErrorResponse } from "apisauce"
import { API_STATUS } from "./api-constants"

test("handles connection errors", () => {
  expect(getGeneralApiProblem({ problem: "CONNECTION_ERROR" } as ApiErrorResponse<null>)).toEqual({
    kind: API_STATUS.CannotConnect,
    temporary: true,
  })
})

test("handles network errors", () => {
  expect(getGeneralApiProblem({ problem: "NETWORK_ERROR" } as ApiErrorResponse<null>)).toEqual({
    kind: API_STATUS.CannotConnect,
    temporary: true,
  })
})

test("handles timeouts", () => {
  expect(getGeneralApiProblem({ problem: "TIMEOUT_ERROR" } as ApiErrorResponse<null>)).toEqual({
    kind: API_STATUS.TimeOut,
    temporary: true,
  })
})

test("handles server errors", () => {
  expect(getGeneralApiProblem({ problem: "SERVER_ERROR" } as ApiErrorResponse<null>)).toEqual({
    kind: API_STATUS.Server,
  })
})

test("handles unknown errors", () => {
  expect(getGeneralApiProblem({ problem: "UNKNOWN_ERROR" } as ApiErrorResponse<null>)).toEqual({
    kind: API_STATUS.Unknown,
    temporary: true,
  })
})

test("handles unauthorized errors", () => {
  expect(getGeneralApiProblem({ problem: "CLIENT_ERROR", status: 401 } as ApiErrorResponse<null>)).toEqual({
    kind: API_STATUS.Unauthorized,
  })
})

test("handles forbidden errors", () => {
  expect(getGeneralApiProblem({ problem: "CLIENT_ERROR", status: 403 } as ApiErrorResponse<null>)).toEqual({
    kind: API_STATUS.Forbidden,
  })
})

test("handles not-found errors", () => {
  expect(getGeneralApiProblem({ problem: "CLIENT_ERROR", status: 404 } as ApiErrorResponse<null>)).toEqual({
    kind: API_STATUS.NotFound,
  })
})

test("handles other client errors", () => {
  expect(getGeneralApiProblem({ problem: "CLIENT_ERROR", status: 418 } as ApiErrorResponse<null>)).toEqual({
    kind: API_STATUS.Rejected,
  })
})

test("handles cancellation errors", () => {
  expect(getGeneralApiProblem({ problem: "CANCEL_ERROR" } as ApiErrorResponse<null>)).toBeNull()
})
