import React from "react";
import { useSelector } from "react-redux";
import { IReduxStateType } from "../../../store/reducer";
import { IssuesList } from "./IssuesList";
type Props = {
  loading:boolean
};
export const IssuesListContainer = ({
  loading
}: Props) => {
  const issues = useSelector(
    (state: IReduxStateType) => state.issues
  );

  return <section>
    {
      loading ? <p>LOADING</p> : <IssuesList IssuesList={issues}/>
    }

      
  </section>;
};
