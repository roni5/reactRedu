import React from 'react';
//mport PropTypes from 'prop-types';
import { connect } from 'react-redux';
import constants from '../store/constants';



function Lister(props) {

  return (
    <div>
      <h1> Lister</h1>
      <form onSubmit={props.submit} >
      </form>
      <ul>
        <li className="item1">item 01</li>
        <li className="item2">item 02</li>
      </ul>
    </div>
  )
}

export default Lister;
