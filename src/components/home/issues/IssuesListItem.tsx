import * as React from 'react';
import { ProductColors } from '../../../consts/consts';
import { IIssue } from '../../../store/types';
import { makeStyles } from '@mui/styles';
import moment from 'moment'
type Props = {
    item:IIssue
};

const useStyles = makeStyles({
    issueContainerDiv:{
        background:ProductColors.alternativeThemeColor,
        padding:"1rem 0.5rem",
        borderRadius:"8px",
        margin:"1rem 0.5rem",
        "&>a":{
            color:"inherit",
            textDecoration:"none",
            "& >p:first-child":{
                fontSize:"1rem",
                fontWeight:"500",
                color:ProductColors.primaryTextColor
            }
        },
        "&>p":{
            fontSize:"0.8rem",
            fontWeight:"400",
            color:ProductColors.secondaryTextColor
        }
    }
  });

export const IssuesListItem = ({item}: Props) => {
    const classes = useStyles();

    const formatTime = (dateTime:string)=>{
        return moment(dateTime)
        .utc()
        .format("DD/MM/YYYY hh:mm A")
    }
    console.log(item.createdAt,formatTime(item.createdAt));
    
    return (
    <article className={classes.issueContainerDiv}>
        <a href={item.url} target="_blank"><p>{item.title}</p></a>
        <p>Opened on <time dateTime={item.createdAt}>{formatTime(item.createdAt)}</time> by {item?.author?.login ?? "Unknown"} | Comments: {item.comments?.nodes?.length ?? 0}</p>
    </article>
    );
};