import uuid from 'uuid';
//ADD_CATEGORY
export const  addCategory = (
  {
    name='',
  }={}
) => ({
  type:'ADD_CATEGORY',
  category: {
    id: uuid(),
    name
  }
});
//REMOVE_CATEGORY
export const removeCategory = ({ id } = {}) => ({
    type:'REMOVE_CATEGORY',
    id
});
//EDIT_CATEGORY
export const editCategory = (id, updates) => ({
  type:'EDIT_CATEGORY',
  id,
  updates
});