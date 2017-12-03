import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
const Footer = (props) => {
  return (
    <div>
        <footer className={`${props.centerFooter ? " justify-content-center" : " justify-content-start"} container d-flex mt-2 col-12 col-md-6`}>
          {
            props.hasCategories &&
            <NavLink to="/categories" activeClassName="is-active" className="btn bg-dark text-white mr-2">Categories</NavLink>
          }
          {
            props.hasLocations &&
            <NavLink to="/locations" activeClassName="is-active" className="btn btn-secondary ml-2">Locations</NavLink>
          }
        </footer>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    hasCategories:true,
    hasLocations:true,
    centerFooter: state.filters.centerFooter
  }
}
export default connect(mapStateToProps)(Footer);