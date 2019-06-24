import React, { Component } from "react";
import Form from "./Form";
import { connect } from "react-redux";
import { updateSmurf } from "../actions/index";
class UpdateForm extends Component {
  editSmurfsHandler = e => {
    e.preventDefault();
    let data = {
      name: e.currentTarget[0].value,
      age: e.currentTarget[1].value,
      height: e.currentTarget[2].value
    };
    let id = this.props.match.params.id;
    this.props.updateSmurf(id, data);
    e.currentTarget.reset();
    this.props.history.push("/");
  };
  getSingleSmurf = () => {
    let id = this.props.match.params.id;
    let data = this.props.smurfs.filter(elem => elem.id === +id);
    return data;
  };
  render() {
    let output = this.getSingleSmurf();
    return (
      <div>
        <Form
          {...output[0]}
          submit={this.editSmurfsHandler}
          title="Edit a Village Smurf"
        />
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
  { updateSmurf }
)(UpdateForm);
