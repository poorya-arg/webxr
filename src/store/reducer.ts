import * as actionTypes from "./actionTypes"
import { IIssue, IssuesAction } from "./types"

export type IReduxStateType = {
  issues:IIssue[]
}
const initialState: IReduxStateType = {
  issues: [],
}
const reducer = (
    state: IReduxStateType = initialState,
    action: IssuesAction
  ): IReduxStateType=> {
    switch (action.type) {
      case actionTypes.ADD_ISSUES:
        return {
          ...state,
          issues: action.issues,
        }
    }
    return state
  }
  
  export default reducer