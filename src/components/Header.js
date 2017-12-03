import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


const Header = (props) => {
  return (
    <header className="text-center pt-5 pb-5">
      <div className="container">
        <h1 className="main-heading">{props.title}</h1>
        <NavLink to="/" activeClassName="is-active" className="headerItem" exact={true}>Dashboard</NavLink>
        <NavLink to={`/${props.type}/create/`} activeClassName="is-active" className="headerItem" exact={true}>Create {props.label}</NavLink>
        {
          props.categories.length > 0 && props.type === "categories" &&
          <NavLink to={`/${props.type}/edit/${props.id}`} activeClassName="is-active" className="headerItem" exact={true}>Edit {props.label}</NavLink>
        }
        {
          props.locations.length > 0 && props.type === "locations" &&
          <NavLink to={`/${props.type}/edit/${props.id}`} activeClassName="is-active" className="headerItem" exact={true}>Edit {props.label}</NavLink>
        }
      </div>
    </header>
  );
}

const mapStateToProps = (state, props) => {
  return {
    categories: state.categories,
    locations: state.locations,
    id: props.id ? props.id : '',
    type: (props.title.indexOf('Location') !== -1) ? 'locations' : 'categories',
    label: (props.title.indexOf('Location') !== -1) ? 'Location' : 'Category'
  };
}

export default connect(mapStateToProps)(Header);