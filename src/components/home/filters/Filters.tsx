import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { CHANGE_PAGE, ISSUE_STATE_ENUM, ProductColors } from '../../../consts/consts';
import { Button } from '../../Widgets/Button';
type Props = {
    handleFilterChange:(filter:ISSUE_STATE_ENUM)=>void,
    handlePageChange:(page:CHANGE_PAGE)=>void,
    hasNextPage:boolean;
    hasPreviousPage:boolean;
    issueStateFilter:ISSUE_STATE_ENUM;
};

const useStyles = makeStyles({
    Filters:{
        background:ProductColors.mainThemeColor,
        padding:"2rem 0",
        color:ProductColors.primaryTextColor,
        margin:"1rem 0",
        textAlign:"center",
        "& >section":{
            margin:"0.5rem auto",
            width:"50%",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            "& button":{
                padding:"0.5rem 1rem",
                borderRadius:"8px",
                border:"none",
                margin:"0 1rem",
                width:"10rem",
                '&:hover':{
                    cursor:"pointer"
                }
            }
        },
        "&>h1":{
            marginTop:"0",
            color:ProductColors.primaryTextColor,
        
        }
    },
    SelectedButton:{
        background:ProductColors.activeButtonColor
    }
  });
export const Filters = (props: Props) => {
    const classes = useStyles();
    return (
        <section className={classes.Filters}>
            <h1>FILTERS</h1>
            <section>
                <Button text="OPEN ISSUES" selected={props.issueStateFilter === ISSUE_STATE_ENUM.OPEN} value={ISSUE_STATE_ENUM.OPEN} onChange={props.handleFilterChange} />
                <Button text="CLOSED ISSUES" selected={props.issueStateFilter === ISSUE_STATE_ENUM.CLOSED} value={ISSUE_STATE_ENUM.CLOSED} onChange={props.handleFilterChange} />
            </section>
            <section>
                <Button text="Previous Page" value={CHANGE_PAGE.PREVIOUS} disabled={!props.hasPreviousPage} onChange={props.handlePageChange} />
                <Button text="Next Page"  value={CHANGE_PAGE.NEXT} disabled={!props.hasNextPage} onChange={props.handlePageChange} />
            </section>
        </section>
    );
};