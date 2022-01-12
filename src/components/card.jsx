import React from "react"
import colors from "../colors.js"



function Note(props){
    function handleClick() {
        props.onDelete(props.id);
    }
    
    //console.log(props.num);
    const curretnTime = (new Date().getSeconds()+props.num)%6;
    return <div className="note" style={{backgroundColor:colors[curretnTime]}}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <p>-{props.user}</p>
        <button onClick={handleClick}><i class="fas fa-trash-alt"></i></button>
    </div>;
}
export default Note;