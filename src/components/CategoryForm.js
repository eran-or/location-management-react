import React from 'react';
import {connect} from 'react-redux';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.category ? props.category.name : '',
    }
  }
  onNameChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name) {
      this.setState(() => ({ error: "please provide name." }))
    } else {
      let exist;
      for(let category of this.props.categories){
        if(category.name === this.state.name){
          exist = true;
          this.setState(() => ({ error: "This category name Already exist." }))
          break;      
        }
      }
      if(!exist){
        this.setState(() => ({ error: '' }));
        this.props.onSubmit({
          name: this.state.name
        });
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
            <input
              className="form-control col-12 col-md-auto mb-3"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.onNameChange}
            />
            <button className="btn pointer mb-3">{this.props.buttonText}</button>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    categories: state.categories
  }
}
export default connect(mapStateToProps)(CategoryForm)