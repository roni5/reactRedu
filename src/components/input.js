import React from 'react';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types'

//export default (props) => {}
function input(props) {
  return (
    <div>
      <input value={props.inputValue} onChange={props.inputChanged} />
      <p>{props.inputValue}</p>
    </div>
  );
}
//input.propTypes = {
//}
//reduxmap better hocredux
const mapStateToProps = (state) => ({
  inputValue: state.inputValue
});
//const mapStateToProps = (state) => {
  //return { inputValue: state.inputValue }
//}

const mapDispatchToProps = (dispatch) => {
  return {
    inputChanged: (evt) => {
      dispatch({ type: 'INPUT_CHANGE', text: evt.target.value });
    },
    submit: (evt) => {
      evt.preventDefault();
      const action = { type: 'ADD_ITEM'};
            dispatch(action);
           }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(input);
