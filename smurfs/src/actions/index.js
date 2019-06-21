/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'
export const ADDSMURF = "ADDSMURF";
export const GETSMURFS = "GETSMURFS";
export const UPDATESMURF = "UPDATESMURF";
export const DELETESMURF = "DELETESMURF";
export const FAILURE = "FAILURE";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => dispatch => {
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res.data)
      dispatch(addSmurf(res.data));
    })
    .catch(err => {
      dispatch(failure(err.message));
    });
};

export const addSmurf = res => {
  return {
    type: ADDSMURF,
    val: res
  };
};
export const failure = err => {
  return {
    type: FAILURE,
    val: err
  };
};


