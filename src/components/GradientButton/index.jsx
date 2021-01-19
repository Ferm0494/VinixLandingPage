import React from 'react';
import './button.scss'


const Button = ({title,logo,className}) => {
    return (
        <button type="button" className={className? className : "gradient-button"} >
            {title}
        </button>
    );
};




export default Button
