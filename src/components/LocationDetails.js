import React from 'react';
import GoogleMap from './GoogleMap';
import { connect } from 'react-redux';
import Header from './Header';
import { setCenterFooter } from '../actions/filters';

const LocationDetails = (props) => {
  props.dispatch(setCenterFooter(true))
  
  const { name, address, coordinates, category, id } = props.location;
  return (
    <div className="">
      <Header title={props.label} id={id} />
      {props.display === 'details' ?
        <div className="container col-12 col-md-6">
          <h4 className="dark-blue">{name}</h4>
          <address>
            <p><b>Address:</b> {address}</p>
            <p><b>Coordinates:</b></p>
            <p>(lat) {coordinates.lat}</p>
            <p>(long) {coordinates.lng}</p>
            <p><b>Category: </b>{category.value}</p>
          </address>
        </div>
        :
        <div className="mb-3 container col-12 col-md-6">
          <GoogleMap lat={coordinates.lat} lng={coordinates.lng} />
        </div>
      }
    </div>
  )
};

const mapStateToProps = (state, props) => {
  return {
    label: props.location.search === '?display=map' ? 'Location Map' : 'Location Details',
    location: state.locations.find((location) => (location.id === props.match.params.id)),
    display: props.location.search === '?display=map' ? 'map' : 'details'
  };
}

export default connect(mapStateToProps)(LocationDetails);