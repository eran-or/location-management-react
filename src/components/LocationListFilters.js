import React from 'react';
import { connect } from 'react-redux';
import SelectCategory from './SelectCategory';
import { groupedByCategory, setSortOrder, selectOneCategory } from '../actions/filters';

class LocationListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortChecked: props.filters.sortOrder,
      groupedChecked: props.filters.groupedByCategory
    }
  }
  groupedCheckedChange = (e) => {
    console.log(e)
    let groupedChecked;
    if(e){
      this.selectCategoryChange('')
       groupedChecked = e.target.checked;
    }else{
      groupedChecked = false;
    }
    const isGrouped =  groupedChecked ? true : false;
    this.setState(() => ({ groupedChecked }));
    this.props.dispatch(groupedByCategory(isGrouped))
  }
  sortCheckedChange = (e) => {
    const sortChecked = e.target.checked;
    const label = sortChecked ? 'Alphabetically' : '';
    this.setState(() => ({ sortChecked }));
    this.props.dispatch(setSortOrder(label))
  }
  selectCategoryChange = (value) => {

    if(value){
      this.groupedCheckedChange();
      this.setState(() => ({ selected: value }));
      this.props.dispatch(selectOneCategory(value))
    }
  }


  render() {
    return (
        <div className="flex-column ">
          <div className="d-md-flex align-items-center mb-2">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" checked={this.state.groupedChecked} onChange={this.groupedCheckedChange} />
              <span>Gouped By Category</span>
            </label>
          </div>
          <div className="d-md-flex align-items-center col-xs-12 mb-2">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" checked={this.state.sortChecked} onChange={this.sortCheckedChange} />
              <span>Alphabetically</span>
            </label>
          </div>
          <div className="d-md-flex align-items-center col-xs-12 mb-2">
            <label>
            <SelectCategory categories={this.props.categories} onChange={this.selectCategoryChange} />
            <span className=""> (Show only By One Category)</span>
            </label>
          </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    categories: state.categories
  };
};
export default connect(mapStateToProps)(LocationListFilters);