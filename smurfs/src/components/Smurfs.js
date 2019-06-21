import React, { Component } from "react";
import "./App.css";
import { getSmurfs, addSmurf } from "../actions";
import { connect } from "react-redux";
import Form from "./Form";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  addSmurfsHandler = e => {
    e.preventDefault();
    let data = {
      name: e.currentTarget[0].value,
      age: e.currentTarget[1].value,
      height: e.currentTarget[2].value + "cm"
    };
    this.props.addSmurf(data);
    e.currentTarget.reset();
  };
  updatePage = (id) => {
    this.props.history.push("/update/" + id);
  };
  render() {
    return (
      <div className="App">
        <div>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your Redux version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
          {this.props.smurfs.map(elem => (
            <div
              key={elem.id}
              className="smurf_card"
              onClick={() => this.updatePage(elem.id)}
            >
              <p>{elem.name}</p>
              <p>
                Age: <span>{elem.age}</span> Height: <span>{elem.height}</span>{" "}
              </p>
            </div>
          ))}
        </div>
        <div>
          <Form submit={this.addSmurfsHandler} title='Add to the Smurfs Village'/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(Smurfs);
