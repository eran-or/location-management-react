import uuid from 'uuid';
//ADD_LOCATION
export const addLocation = (
  {
    name = '',
    address = '',
    coordinates = {},
    category = ''
  } = {}
) => ({
  type: 'ADD_LOCATION',
  location: {
    id: uuid(),
    name,
    address,
    coordinates,
    category
  }
});
//REMOVE_LOCATION
export const removeLocation = ({ id } = {}) => ({
  type: 'REMOVE_LOCATION',
  id
});
//EDIT_LOCATION
export const editLocation = (id, updates) => ({
  type: 'EDIT_LOCATION',
  id,
  updates
});