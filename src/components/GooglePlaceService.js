import React, { Component } from 'react';

export default class GoogleMap extends Component {

  setAddress = () => {
    const place = this.autocomplete.getPlace();
    this.props.location({
      address: this.textInput.value,
      coordinates: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
    });
  }

  shouldComponentUpdate() {
    return false;
  }
  componentDidMount() {
    this.autocomplete = new window.google.maps.places.Autocomplete(this.textInput, {
      types: ['geocode']
    });
    this.autocomplete.addListener('place_changed', this.setAddress);
  }
  render() {
    return (
      <div>
        <input className="form-control col-12 col-md-auto" id="autocomplete" ref={(input) => { this.textInput = input; }} placeholder="Enter your address"
          type="text"></input>
      </div>
    )
  }
}