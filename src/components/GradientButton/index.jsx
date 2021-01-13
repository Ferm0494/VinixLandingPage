import React from 'react';
import './button.scss'


const Button = ({title,logo}) => {
    return (
        <button type="button" className="gradient-button" >
            {title}
        </button>
    );
};




export default Button
