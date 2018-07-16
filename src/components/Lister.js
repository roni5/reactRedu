import React from 'react';
//mport PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from '../store/constants';



function Lister(props) {
  //console.log('render', props);
  return (
    <div>
      <h1> Lister</h1>
      <form onSubmit={props.submit} >
        <input value={props.inputText}
          onChange={props.inputChange} />
      </form>
      <ul>
        { props.items.map((item, index) => {
          return <li key={index}
            onClick= {()=> props.itemDelete(index)}> {item} </li>
        })}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    inputText: state.inputText,
    items: state.items
  };
}
function mapDispatchToProps(dispatch) {
  return {
    inputChange: (evt) => {
      const action = { type: constants.CHANGE_INPUT_TEXT, text: evt.target.value};
            dispatch(action);
    },
    submit: (evt) => {
      evt.preventDefault();
      const action = { type: constants.ADD_ITEM };
            dispatch(action);
    },
    itemDelete: (index) => {
      console.log('index', index)
      const action = { type: constants.DELETE_ITEM, index:index };
            dispatch(action);
    }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Lister);
