import { ISSUE_STATE_ENUM } from "../consts/consts"

interface IIssue {
    bodyText: string;
    createdAt: string;
    title: string;
    url:string;
    __typename:string;
    repository:Repository;
    comments:Comments;
    author:Author;
    id:string;
    state:ISSUE_STATE_ENUM;

  }
  
  type Comments = {
    nodes:CommentNode[];
    __typename:string;
    totalCount:number;
  }
  type CommentNode = {
    bodyText: string;
    createdAt: string;
    author:Author;
    __typename:string;
  }
  type Author = {
    avatarUrl: string;
    login: string;
    __typename:string;
  }
  
  type Repository = {
    name:string;
    __typename:string;
  }

  type IssuesAction = {
    type: string;
    issues: IIssue[];
  }
  type FiltersAction = {
    type: string;
    filterState: ISSUE_STATE_ENUM;
  }
  
  type DispatchType = (args: IssuesAction) => IssuesAction