import * as React from 'react';
import { makeStyles } from '@mui/styles';
import {  ProductColors } from '../../consts/consts';

const useStyles = makeStyles({
    headerDiv:{
        textAlign:"center",
        background:ProductColors.mainThemeColor,
        padding:"2rem 0",
        color:ProductColors.primaryTextColor
    }
  });
export const HomeHeader = () => {
    const classes = useStyles();

    return (
        <header className={classes.headerDiv}>
            List Of Github Issues For ReactJS Repository
        </header>
    );
};