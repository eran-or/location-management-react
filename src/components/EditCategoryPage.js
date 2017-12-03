import React from 'react';
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';
import { editCategory, removeCategory } from '../actions/categories';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import Header from './Header';
import { setCenterFooter } from '../actions/filters';

const EditCategoryPage = (props) => {
  props.dispatch(setCenterFooter(false))
  return (
    <div>
      <Header title="Edit Category" />
      <div className="container col-12 col-md-6">
        <div className="d-flex align-items-start">
          <div className="col-11 pl-0 ">
            <CategoryForm
              buttonText="Edit Category"
              category={props.category}
              onSubmit={(category) => {
                props.dispatch(editCategory(props.category.id, category));
                props.history.push('/categories');
              }}
            />
          </div>


          <div>
            <small><FaTrashO className="pointer" size="18" fill="#007bff" onClick={(e) => {
              props.dispatch(removeCategory({ id: props.category.id }));
              props.history.push('/categories');
            }}>Remove</FaTrashO></small>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    category: state.categories.find((category) => (category.id === props.match.params.id))
  };
};

export default connect(mapStateToProps)(EditCategoryPage);