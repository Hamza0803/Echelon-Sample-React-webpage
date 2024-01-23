 import React from 'react';
 import './Button.css';
 import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']; //CSS classes

const SIZES = ['btn--medium', 'btn--large'];

 export const Button = ({
    children,
    type,
    onClick, 
    buttonStyle, 
    buttonSize
     }) =>{
        const checkButtonStyle = STYLES.includes(buttonStyle)
         ? buttonStyle  //if it has a button style, use it if not....
         : STYLES[0]   //i.e first style in STYLE array which is 'btn-primary'
    
         const checkButtonSize = SIZES.includes(buttonSize)
         ? buttonSize
         : SIZES[0];  //I.E 'btn-medium'
    
        return(
            <Link to='/sign-up' className='btn-mobile'>
                <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>
            </Link>
        )

        }
