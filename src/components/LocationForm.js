import React from 'react';
import GooglePlaceServivce from './GooglePlaceService';
import SelectCategory from './SelectCategory';
import { connect } from 'react-redux';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.category ? props.category.name : ''
    }
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onAddressChange = (e) => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name) {
      this.setState(() => ({ error: "please provide name." }))
    }
    else if (!this.state.address) {
      this.setState(() => ({ error: "please provide address." }))
    }
    else if (!this.state.selected) {
      this.setState(() => ({ error: "please select category." }))
    }
    else {
      let exist;
      for (let location of this.props.locations) {
        if (location.name === this.state.name) {
          exist = true;
          this.setState(() => ({ error: "This location name Already exist." }));
          break;
        }
      }
      if (!exist) {
        console.log("eran")
        this.setState(() => ({ error: '' }));
        this.props.onSubmit({
          name: this.state.name,
          address: this.state.address,
          coordinates: this.state.coordinates,
          category: this.state.selected
        });
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <SelectCategory categories={this.props.categories} onChange={(value) => {
              this.setState(() => ({ selected: value }));
            }} />
          </div>
          <div className="mb-3">
            <input className="form-control col-12 col-md-auto" type="text" placeholder="Enter Location name" value={this.state.name} onChange={this.onNameChange} />
          </div>
          <div className="mb-3">
            <GooglePlaceServivce location={
              (location) => {
                const { address, coordinates } = location;
                this.setState(() => ({ address, coordinates }))
              }
            } />
          </div>

          <button className="mb-3 btn pointer">{this.props.buttonText}</button>
        </form>
      </div>
    )
  }
}

const mapSteteToProps = (state) => {
  return {
    locations: state.locations
  }
}
export default connect(mapSteteToProps)(LocationForm);

