export default (categories, { sortCategoriesOrder }) => {
  let copy = [...categories]
   copy.sort((a, b) => {
    return ('Alphabetically' === sortCategoriesOrder) ? (a.name > b.name ? 1 : -1) : '';
  })
  return copy;
}