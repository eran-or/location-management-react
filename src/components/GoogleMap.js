import React, { Component } from 'react';

export default class GoogleMap extends Component {
  // constructor (props) {
  //     super(props);
  // }
  // fillInAddress = () => {
  //     const place = this.autocomplete.getPlace();
  //     this.props.onSubmit({
  //         address:this.textInput.value,
  //         coordinates: {
  //             lat:place.geometry.location.lat(),
  //             lng:place.geometry.location.lng()
  //         }
  //     });
  // }
  geolocate = () => {

    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //       const geolocation = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude
    //       };
    //       const circle = new window.google.maps.Circle({
    //         center: geolocation,
    //         radius: position.coords.accuracy
    //       });
    //       this.autocomplete.setBounds(circle.getBounds());
    //     });
    //   }
  }
  // onChange (props) {
  //     console.log(props)
  //     // this.props.onSubmit({
  //     //     location: "eran"
  //     // });
  // }
  shouldComponentUpdate() {
    return false;
  }
  componentWillReceiveProps(nextProps) {
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng })

  }
  componentDidMount() {
    this.map = new window.google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 8
    });

  }
  render() {
    return (
      <div id="map" ref="map" />
    )
  }
}