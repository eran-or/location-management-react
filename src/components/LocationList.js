import React from 'react';
import { connect } from 'react-redux';
import LocationListItem from './LocationListItem';
import selectLocations from '../selectors/locations';
import Header from '../components/Header';
import LocationListFilters from './LocationListFilters';
import { setCenterFooter } from '../actions/filters';

class LocationList extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(setCenterFooter(true))
  }
  render() {
    return (
      <div className="">
        <Header title={this.props.title} />
        <div className="d-flex justify-content-center justify-content-md-between container col-12 col-md-6">
          <div className="d-flex flex-column justify-content-between flex-md-row col-md-12 col-auto">
            <LocationListFilters />
            <div className="col-md-auto">
              {!this.props.grouped && this.props.locations.map((location) => {
                return <LocationListItem key={location.id} {...location} {...this.props} />;
              })
              }
              {
                this.props.grouped && Object.entries(this.props.locations).map((current, index, arr) => {

                  let category = current[0];
                  let locations = current[1];
                  return (
                    <div key={index}>
                      <h4>{category}</h4>
                      {
                        locations.map((location) => {
                          return <LocationListItem key={location.id} {...location} {...this.props} />;
                        })
                      }
                    </div>
                  );
                })

              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => {
  return {
    grouped: state.filters.groupedByCategory,
    title: 'Locations',
    edit: props.match ? props.match.params.edit : '',
    locations: selectLocations(state.locations, state.filters)
  };
}

export default connect(mapStateToProps)(LocationList);