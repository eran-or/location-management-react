import React from 'react';
import { connect } from 'react-redux';
import LocationForm from './LocationForm';
import { editLocation, removeLocation } from '../actions/locations';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import Header from './Header';
import { setCenterFooter } from '../actions/filters';

const EditLocationPage = (props) => {
  props.dispatch(setCenterFooter(false))
  return (
    <div>
      <Header title="Edit Location" />
      <div className="d-flex justify-content-center container col-12">
        <div className="d-flex justify-content-between col-12 pl-0 pl-md-2 col-md-6">
          <LocationForm
            buttonText="Edit Location"
            categories={props.categories}
            location={props.location}
            onSubmit={(location) => {
              props.dispatch(editLocation(props.location.id, location));
              props.history.push('/locations');
            }}
          />
          <small><FaTrashO className="pointer" size="18" fill="#007bff" onClick={(e) => {
            props.dispatch(removeLocation({ id: props.location.id }));
            props.history.push('/locations');
          }}>Remove</FaTrashO></small>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    location: state.locations.find((location) => (location.id === props.match.params.id)),
    categories: state.categories
  };
};

export default connect(mapStateToProps)(EditLocationPage);