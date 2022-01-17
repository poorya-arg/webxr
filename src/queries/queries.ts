
import gql from "graphql-tag";
import { CHANGE_PAGE, ISSUE_STATE_ENUM } from "../consts/consts";


export const getIssuesQuery = (filter:ISSUE_STATE_ENUM,changePage:CHANGE_PAGE | null,queryEndCursor:string)=>{
  return gql`{
    search(first: 100, type: ISSUE, query: "repo:reactjs/reactjs.org state:${filter}", ${queryEndCursor.length > 1 ? `${changePage}: "${queryEndCursor}"` : ''}){
     issueCount
     pageInfo {
       hasNextPage,
       endCursor,
       hasPreviousPage,
     }
     edges {
       node {
         ... on Issue {
           createdAt,
           state,
           title,
           id,
           url,
           repository {
             name
           },
           bodyText,
           author{
            login,
            avatarUrl
          },
           comments(first:100) {
             totalCount,
             nodes{
               bodyText,
               createdAt,
               author{
                 login,
                 avatarUrl
               }
             }
           }
         }
       }
     }
   }
   }
   `;
   
}
