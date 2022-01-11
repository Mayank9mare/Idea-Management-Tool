import React, { useState } from "react"

import Heading from "./header"
import Footer from "./footer"
import Note from "./card"
import notes from "../notes"
import CreateNote from "./createNote"


function createNotes(item){
    return <Note
    key={item.key}
    num={item.key}
    title={item.title}
    content={item.content}
    />

}
function App(){

    const [items,setItems]=useState([...notes]);
     function addItem(newItem){
         console.log(newItem);
         setItems(prevItems=>{
            return [...prevItems,newItem];//updating items
         });

        


     }
     function deleteNote(id) {
        setItems(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }

    return (<div> 
    <Heading></Heading>
    <CreateNote onAdd={addItem}/>
    {items.map((noteItem,index)=>{
        return (
            <Note
                key={index}
                num={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
            />

        );

    })}
    <Footer></Footer>
    </div>);

}
export default App;