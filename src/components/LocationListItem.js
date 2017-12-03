import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import FaMap from 'react-icons/lib/fa/map';
import FaEdit from 'react-icons/lib/fa/edit';

class LocationListItem extends React.Component {
  
  onClick = (e) => {
    // enable vibration support
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
  
    if (navigator.vibrate) {
        navigator.vibrate(200)
    }
  }
  render() {
    return (
      <div>
        {this.props.edit ?
          <h4 className="d-flex align-items-center"><NavLink to={`${this.props.id}`}>{this.props.name}</NavLink><small className="text-muted pl-1"><FaEdit /></small></h4> :
          <div className="d-flex">
            <NavLink to={`/location/${this.props.id}?display=details`} onClick={this.onClick}>{this.props.name}</NavLink>
            <span className="pl-2 pr-2">|</span>
            <NavLink to={`/location/${this.props.id}?display=map`}><FaMap>{this.props.name} map</FaMap></NavLink>
          </div>
        }

      </div>
    )
  };
}

const mapStateToProps = (state, props) => {

  return {

  };
}

export default connect(mapStateToProps)(LocationListItem);