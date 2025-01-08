import React from "react";
import { inputStyle } from "../Styles/style";

const Input=(props)=>{
    return(
        <input 
        type={props.type} 
        style={props.style}
        onChange={props.handleOnChange}
        {...props}
        />
    )
}

export default Input;