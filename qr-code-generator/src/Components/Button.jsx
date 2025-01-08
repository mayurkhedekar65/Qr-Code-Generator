import React from "react";
import { buttonStyle } from "../Styles/style";
const Button=(props)=>{
    return(
        <button style={buttonStyle} 
        onClick={props.handleOnClick}{...props}>
            {props.text}
        </button>
    );
}
export default Button;