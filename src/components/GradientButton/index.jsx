import React from 'react';
import {Button as MUIButton,makeStyles} from '@material-ui/core'
import './button.scss'



const useStyles= makeStyles((theme)=>({
    root:{
        borderRadius:'200px',
        fontFamily: 'Mada-SemiBold',
        textTransform: 'none',
        padding: '7px 40px',
        fontSize: '20px',
       ['@media (max-width: 991.98px)']:{
            minWidth:'inherit'
       },

       ['@media (max-width: 767.98px)']:{
        fontSize: '15px'
   },

   '&:hover':{
       opacity:0.8,
   }
    

    }
}))

const Button = ({title,Logo,className}) => {
    console.log("Logo?",Logo);
    const {root} = useStyles()
    return (
        
            Logo? (
        <MUIButton startIcon={Logo} className={className? `${className} ${root}` : `gradient-button  ${root} `} >
             {title}
        </MUIButton>)
        : (<MUIButton  className={className? `${className} ${root}` : `gradient-button  ${root} `} >
        {title}
        </MUIButton>)
        
    );
};




export default Button
