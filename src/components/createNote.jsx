import React, { useState } from "react";

function CreateNote(props){
    var k=Math.floor(6*Math.random());
    const [note,setNote]=useState({title: "",content: "",key:k});

    function handleChange(event) {
        const { name, value } = event.target;
    
        setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });
      }
   
    
    function submitFinal(event){
        var n=Math.floor(6*Math.random());
        
        props.onAdd(note);//adding the note
        setNote({
            title:"",
            content:"",
            key:n
        });
        event.preventDefault();
        //event.preventDefault();//preventing the screem reload


    }

    return (
        <div>
            <form className="create-box">
                <input 
                    name="title"
                    onChange={handleChange} 
                    value={note.title} 
                    placeholder="Title"/>
                <textarea 
                    name="content" 
                    onChange={handleChange}
                    value={note.content} 
                    placeholder="Note..." 
                    rows={3}>
                </textarea>
                <button onClick={submitFinal}><i class="fas fa-plus"></i></button>
            </form>
        </div>

    );

}
export default CreateNote;