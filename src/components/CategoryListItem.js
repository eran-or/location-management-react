import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import FaEdit from 'react-icons/lib/fa/edit';

const CategoryListItem = (props) => {
  return (
    <div>
      {props.edit ?
        <h4 className="d-flex align-items-center"><NavLink to={`${props.id}`}>{props.name}</NavLink><small className="text-muted pl-1"><FaEdit /></small></h4> :
        <h4 className="dark-blue">{props.name}</h4>
      }
    </div>
  )
};

export default connect()(CategoryListItem);