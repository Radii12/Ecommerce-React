import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function MyButton(props){
    return(
        <>
        <button onClick={props.onClick} className={`btn btn-${props.color} btn-bg-${props.back}  `}>{props.content} </button>
        </>
    )
}
export default MyButton;

