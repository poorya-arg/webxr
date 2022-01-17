import * as React from 'react';
import { ProductColors } from '../../consts/consts';
import { makeStyles } from '@mui/styles';
type Props = {
    text:string,
    selected?:boolean,
    onChange:(selected:any)=>void;
    value:string;
    disabled?:boolean,
};
const useStyles = makeStyles({
            "& button":{
                padding:"0.5rem 1rem",
                borderRadius:"8px",
                border:"none",
                margin:"0 1rem",
                width:"10rem",
                '&:hover':{
                    cursor:"pointer"
                }
            },
    SelectedButton:{
        background:ProductColors.activeButtonColor
    },
    DisabledButton:{
        opacity:"0.5",
    }
  });
export const Button = ({
    text,
    selected,
    onChange,
    value,
    disabled
}: Props) => {
    const classes = useStyles();
    const getClassnames = ()=>`${selected ? classes.SelectedButton : ''} ${disabled ? classes.DisabledButton : ''}`;

    const onclick = ()=>{
        if(!disabled){
            onChange(value)
        }
    }

    return (
        <div>
                <button className={getClassnames()} onClick={onclick}>
                {text}
                    </button>
        </div>
    );
};