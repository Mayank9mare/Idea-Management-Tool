import React, { useState } from "react"
function Heading(props){
    const [val,setVal]=useState("");
    function handleChange(event){
        props.onChange(event.target.value);
        setVal(event.target.value);




    }
    return <header><h1><i class="fas fa-lightbulb"></i> Idea Management Tool</h1>
    <label>Filter  </label>
  <select value={val} onChange={handleChange}>
  <option value="All">All</option>
  <option value="Risks">Risks</option>
  <option value="General">General</option>
  <option value="Services">Services</option>
</select>

    </header>;
}
export default Heading;