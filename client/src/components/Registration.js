import React, {useState} from 'react';
import { Label, Input } from '@fluentui/react-components';

function Registration() {

  const [file, setFile] = useState("");
  const [author, setAuthor] = useState("");
  const [last_updated, setLastUpdated] = useState("00:00");
  const [last_update, setLastUpdate] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { file, author, last_updated, last_update };
      
      const response = await fetch("http://localhost:5050/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

 
  return (
    <div>
   <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <Label >File: </Label>
        <Input type="file" className="form-control" placeholder="label" accept="image/*,.pdf" value={file} onChange={e => setFile(e.target.value)}/>
        &nbsp;
        <Label >Author: </Label>
        <Input type="text" className="form-control" placeholder="label" value={author} onChange={e => setAuthor(e.target.value)}/>
        &nbsp;
        <Label >Last Updated: </Label>
        <Input type="time" className="form-control" placeholder="label"  min="00:00"
      max="23:59"
      step="60" value={last_updated} onChange={e => setLastUpdated(e.target.value)}/>
        &nbsp;
        <Label >Last Update: </Label>
        <Input type="text" className="form-control" placeholder="label" value={last_update} onChange={e => setLastUpdate(e.target.value)}/>
        
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  )
}

export default Registration