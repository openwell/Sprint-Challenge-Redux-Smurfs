import React from "react";

export default function LoginForm(props) {
  return (
    <div>
      <h2>Add to the Smurfs Village</h2>
      <form action="" onSubmit={props.submit}>
        <label htmlFor="">Name</label>
        <input type="text" /> <br />
        <label htmlFor="">Age</label>
        <input type="number" />
        <br />
        <label htmlFor="">Height</label>
        <input type="number" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
