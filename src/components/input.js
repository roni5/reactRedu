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
      //  const action = {type: 'INPUT_CHANGE' , text: evt.target.value}
      //  dispatch(action);
      //  }
      dispatch({ type: 'INPUT_CHANGE', text: evt.target.value });
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(input);
