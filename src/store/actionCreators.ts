import * as actionTypes from "./actionTypes"
import { DispatchType, IIssue, IssuesAction } from "./types"

export function addIssues(issues: IIssue[]) {
  const action: IssuesAction = {
    type: actionTypes.ADD_ISSUES,
    issues,
  }

  return action;
}