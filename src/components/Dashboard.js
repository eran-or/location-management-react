import React from 'react';
import FaBullseye from 'react-icons/lib/fa/bullseye';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import { connect } from 'react-redux';
import { setCenterFooter } from '../actions/filters';

const Dashboard = (props) => {
  props.dispatch(setCenterFooter(true))
  return (
    <div>
      <Header title="Welcom Aboard" />
      <div className="text-center">
        <h4 className="container">Manage Your Farorit Location with 2 steps</h4>
        <p>Add Category <FaAngleRight /> Add location</p>
          
        <NavLink to="/categories">
          <FaBullseye size="200" fill="#007bff" />
        </NavLink>
      </div>
    </div>
  );
}
  export default connect()(Dashboard);