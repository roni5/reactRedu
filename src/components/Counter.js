import React, { Component } from 'react';
import { connect } from 'react-redux'


const Counter = props => {
  console.log('render' ,props);
  return (
    <div>
      <h2> I am Counter</h2>
      <p> {props.count } </p>
      <button onClick={props.onIncrementClick}>increment</button>
    </div>
  )
}

//const mapStateToProps = (state) => ({
  //console.log('mapStateToProps', state);
 // count: state.count
//});
function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => ({
  onIncrementClick: () => {
    console.log('clicking');
    const action = { type: 'INCREMENT' };
    dispatch(action);
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Counter);