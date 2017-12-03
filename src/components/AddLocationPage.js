import React from 'react';
import { connect } from 'react-redux';
import LocationForm from './LocationForm';
import { addLocation } from '../actions/locations';
import Header from './Header';
import { setCenterFooter } from '../actions/filters';

const AddLocationPage = (props) => {
  props.dispatch(setCenterFooter(false))
  return (
    <div>
      <Header title="Add Location" />
      <div className="container col-12 col-md-6">
        <LocationForm
          buttonText="Add Location"
          categories={props.categories}
          onSubmit={(name, address, coordinates, category) => {
            props.dispatch(addLocation(name, address, coordinates, category));
            props.history.push('/locations');
          }}
        />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps)(AddLocationPage);