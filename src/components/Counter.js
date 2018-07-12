import React, { Component } from 'react';
import { connect } from 'react-redux'


 const Counter = props => {
  return (
    <div>
      <h2> I am Counter</h2>
      <p> {props.count } </p>
      <button>increment</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.count
});
//console.log('mapStateToProps', state);
const mapDispatchToProps = {

}

export default connect(mapStateToProps)(Counter);