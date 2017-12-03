import React from 'react';

class SelectCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  onSelectChenge = (e) => {
    const value = e.target.value;
    this.setState(() => ({ value: value }));
    this.props.onChange({ value })
  }

  render() {
    return (
      <span>
        <select className="form-control" value={this.state.value} onChange={this.onSelectChenge} >
          <option value="" >category</option>
          {
            this.props.categories.map((category) => {
              return <option key={category.id} value={category.name}>{category.name}</option>
            })
          }
        </select>
      </span>
    )
  }
}
export default SelectCategory;