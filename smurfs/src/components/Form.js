import React from "react";

export default function Form(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <form action="" onSubmit={props.submit}>
        <label htmlFor="" >Name</label>
        <input type="text" defaultValue={props.name}/> <br />
        <label htmlFor="">Age</label>
        <input type="number" defaultValue={props.age}/>
        <br />
        <label htmlFor="">Height</label>
        <input type="text" defaultValue={props.height}/>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
