import * as React from 'react';
import { IIssue } from '../../../store/types';
import { IssuesListItem } from './IssuesListItem';
type Props = {
    IssuesList:IIssue[];
};
export const IssuesList = (props: Props) => {
    const renderIssues = ()=>{
        return props.IssuesList.map(item=>{
            return <IssuesListItem item={item} key={item.id}/>
        })
    }
    return (
        <section>
            {renderIssues()}    
        </section>
    );
};