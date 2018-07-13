import React from 'react';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types'

//export default (props) => {}
function input(props) {
  return (
    <div>
      <input value={props.inputText} onChange={props.inputChanged} />
      <p>{props.inputText}</p>
    </div>
  );
}
//input.propTypes = {
//}
//reduxmap better hocredux
const mapStateToProps = (state) => ({
  inputText: state.inputText
});
//const mapStateToProps = (state) => {
  //return { inputText: state.inputText }
//}

const mapDispatchToProps = (dispatch) => {
  return {
    inputChanged: (evt) => {
      dispatch({ type: 'CHANGE_INPUT_TEXT', text: evt.target.value });
    },
    submit: (evt) => {
      evt.preventDefault();
      const action = { type: 'ADD_ITEM'};
            dispatch(action);
           }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(input);
