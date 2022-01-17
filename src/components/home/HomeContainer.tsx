import React, {  useState } from "react";
import { CHANGE_PAGE, ISSUE_STATE_ENUM } from "../../consts/consts";
import { useIssuesQuery } from "../../hooks/useIssuesQuery";
import { Filters } from "./filters/Filters";
import { HomeHeader } from "./HomeHeader";
import {IssuesListContainer} from "./issues/IssuesListContainer";

export default function HomeContainer(){
  const [issueStateFilter, setIssueStateFilter] = useState<ISSUE_STATE_ENUM>(ISSUE_STATE_ENUM.OPEN)
  const [queryEndCursor, setQueryEndCursor] = useState<string>("");
  const [changePage, setChangePage] = useState<CHANGE_PAGE | null>(null);
  const {pageInfo} = useIssuesQuery(issueStateFilter,changePage,queryEndCursor);

  const handleFilterChange = (filter:ISSUE_STATE_ENUM)=>{
    setIssueStateFilter(filter)
}
const handlePageChange = (page:CHANGE_PAGE)=>{
  setQueryEndCursor(pageInfo.endCursor)
  setChangePage(page)
}
  return (
    <main>
      <HomeHeader />
      <Filters handleFilterChange={handleFilterChange} handlePageChange={handlePageChange} hasNextPage={pageInfo?.hasNextPage} hasPreviousPage={pageInfo?.hasPreviousPage} issueStateFilter={issueStateFilter}/>
      <IssuesListContainer loading={pageInfo?.loading}/>
    </main>
  );
};