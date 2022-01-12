import React, { useState } from "react";

function CreateNote(props){
    var k=Math.floor(6*Math.random());
    const [note,setNote]=useState({title: "General",content: "",key:k,user:""});

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
            title:"General",
            content:"",
            key:n,
            user:""
        });
        event.preventDefault();
        //event.preventDefault();//preventing the screem reload


    }

    return (
        <div>
            <form className="create-box">
                
                <textarea 
                    name="content" 
                    onChange={handleChange}
                    value={note.content} 
                    placeholder="Note..." 
                    rows={3}>
                </textarea>
                <input
                    name="user"
                    onChange={handleChange} 
                    value={note.user} 
                    placeholder="User"/>
            
                
                <select 
                    name="title"
                    onChange={handleChange} 
                    value={note.title} 
                    placeholder="Type">
                        <option value="General">General</option>
                        <option value="Risks">Risks</option>
                        <option value="Services">Services</option>
                    </select>
                    <button onClick={submitFinal}><i class="fas fa-plus"></i></button>
            </form>
        </div>

    );

}
export default CreateNote;