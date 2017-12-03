import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import FaMap from 'react-icons/lib/fa/map';
import FaEdit from 'react-icons/lib/fa/edit';

const LocationListItem = (props) => {
  return (
    <div>
      {props.edit ?
        <h4 className="d-flex align-items-center"><NavLink to={`${props.id}`}>{props.name}</NavLink><small className="text-muted pl-1"><FaEdit /></small></h4> :
        <div className="d-flex">
          <NavLink to={`/location/${props.id}?display=details`}>{props.name}</NavLink>
          <span className="pl-2 pr-2">|</span>
          <NavLink to={`/location/${props.id}?display=map`}><FaMap>{props.name} map</FaMap></NavLink>
        </div>
      }

    </div>
  )
};

const mapStateToProps = (state, props) => {
  return {

  };
}

export default connect(mapStateToProps)(LocationListItem);