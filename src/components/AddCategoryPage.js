import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import { addCategory } from '../actions/categories';
import Header from './Header';
import { setCenterFooter } from '../actions/filters';

const AddCategoryPage = (props) => {
  props.dispatch(setCenterFooter(false))
  return (
    <div className="">
      <Header title="Add Category" />
      <div className="container col-12 col-md-6">
        <CategoryForm
          buttonText="Add Category"
          onSubmit={(category) => {
            props.dispatch(addCategory(category));
            props.history.push('/categories');
          }}
        />
      </div>
    </div>
  );
}

export default connect()(AddCategoryPage);