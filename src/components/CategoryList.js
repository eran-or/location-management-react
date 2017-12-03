import React from 'react';
import { connect } from 'react-redux';
import CategoryListItem from './CategoryListItem';
import CategoryListFilters from './CategoryListFilters'
import Header from './Header';
import selectCategories from '../selectors/categories';
import { setCenterFooter } from '../actions/filters';

class CategoryList extends React.Component {

  componentDidMount() {
    this.props.dispatch(setCenterFooter(true))
  }

  render() {
    return (
      <div>
        <Header title={this.props.title} />
        <div className="d-flex justify-content-center container col-12 col-md-6">
          <div className="flex-column">
            <CategoryListFilters />
            {
              this.props.categories.map((category) => {
                return <CategoryListItem key={category.id} {...category} {...this.props} />;
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {
    title: 'Categories',
    edit: props.match ? props.match.params.edit : '',
    categories: selectCategories(state.categories, state.filters)

  };
}

export default connect(mapStateToProps)(CategoryList);
