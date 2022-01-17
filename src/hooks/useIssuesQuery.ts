import { Dispatch, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { getIssuesQuery } from "../queries/queries";
import { useDispatch } from "react-redux"
import { addIssues } from "../store/actionCreators";
import { CHANGE_PAGE, ISSUE_STATE_ENUM } from "../consts/consts";

export function useIssuesQuery(filter:ISSUE_STATE_ENUM,nextPage:CHANGE_PAGE | null,queryEndCursor:string) {
  const dispatcher: Dispatch<any> = useDispatch();
  const { data, loading, error } = useQuery(getIssuesQuery(filter,nextPage,queryEndCursor));
  if(data){
    dispatcher(addIssues(formatGraphqlData(data)))
  }
  return {
      pageInfo: data?.search?.pageInfo,
      loading
  }
}

function formatGraphqlData(data:any):any {
  const Issues = data.search.edges;

  const newIssues = Issues.filter((item:any)=>item.node.bodyText).map((issue:any)=>{
    let temp = issue.node;
    return temp;
  })
  return newIssues
}