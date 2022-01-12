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
    const [val,setVal]=useState("All");
     function addItem(newItem){
         console.log(newItem);
         setItems(prevItems=>{
            return [...prevItems,newItem];//updating items
         });

        


     }
     function changeFilter(newVal){

       setVal(newVal);
       console.log(newVal);

     }
     function deleteNote(id) {
        setItems(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }
    if(val==="All"){
    return (<div> 
    <Heading onChange={changeFilter}></Heading>
    <CreateNote onAdd={addItem}/>
    {items.map((noteItem,index)=>{
        return (
            <Note
                key={index}
                num={index}
                id={index}
                title={noteItem.title}
                user={noteItem.user}
                content={noteItem.content}
                onDelete={deleteNote}
            />

        );

    })}
    <Footer></Footer>
    </div>);
    }
    else if(val==="Risks"){
      return (<div> 
        <Heading onChange={changeFilter}></Heading>
        <CreateNote onAdd={addItem}/>
        {items.map((noteItem,index)=>{
          if(noteItem.title==="Risks"){
            return (
                <Note
                    key={index}
                    num={index}
                    id={index}
                    title={noteItem.title}
                    user={noteItem.user}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
    
            );
          }
    
        })}
      
        <Footer></Footer>
        </div>);

    }
    else if(val==="Services"){
      return (<div> 
        <Heading onChange={changeFilter}></Heading>
        <CreateNote onAdd={addItem}/>
        {items.map((noteItem,index)=>{
          if(noteItem.title==="Services"){
            return (
                <Note
                    key={index}
                    num={index}
                    id={index}
                    title={noteItem.title}
                    user={noteItem.user}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
    
            );
          }
    
        })}
      
        <Footer></Footer>
        </div>);

    }
    else if(val==="General"){
      return (<div> 
        <Heading onChange={changeFilter}></Heading>
        <CreateNote onAdd={addItem}/>
        {items.map((noteItem,index)=>{
          if(noteItem.title==="General"){
            return (
                <Note
                    key={index}
                    num={index}
                    id={index}
                    title={noteItem.title}
                    user={noteItem.user}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
    
            );
          }
    
        })}
      
        <Footer></Footer>
        </div>);

    }
    else{
      return (<div> 
        <Heading onChange={changeFilter}></Heading>
        <CreateNote onAdd={addItem}/>
        {items.map((noteItem,index)=>{
          if(noteItem.title==="Services"){
            return (
                <Note
                    key={index}
                    num={index}
                    id={index}
                    title={noteItem.title}
                    user={noteItem.user}
                    content={noteItem.content}
                    onDelete={deleteNote}
                />
    
            );
          }
    
        })}
      
        <Footer></Footer>
        </div>);
      

    }

}
export default App;