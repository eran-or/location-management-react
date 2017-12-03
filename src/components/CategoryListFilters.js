import React from 'react';
import { connect } from 'react-redux';
import { setCategoriesSortOrder } from '../actions/filters';

class LocationListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortChecked: props.filters.sortCategoriesOrder,
    }
  }
  sortCheckedChange = (e) => {
    const label = e.target.checked ? 'Alphabetically' : '';
    const sortChecked = e.target.checked;
    this.setState(() => ({ sortChecked }));
    this.props.dispatch(setCategoriesSortOrder(label))
  }
  render() {
    return (
      <div>
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" checked={this.state.sortChecked} onChange={this.sortCheckedChange} />
          Alphabetically
        </label>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
 // console.log(state)
  return {
    filters: state.filters
  };
};
export default connect(mapStateToProps)(LocationListFilters);