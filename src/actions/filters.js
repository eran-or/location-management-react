//GROUP_BY_CATEGORY
export const groupedByCategory = (isGrouped) => ({
  type: 'GROUPED_BY_CATEGORY',
  isGrouped
});
//SET_SORT_ORDER
export const setSortOrder = (order) => ({
  type: 'SET_SORT_ORDER',
  order
});
//SELECT_ONE_CATEGORY
export const selectOneCategory = (category) => ({
  type: 'SELECT_ONE_CATEGORY',
  category
});
//SET_CATEGORIES_SORT_ORDER
export const setCategoriesSortOrder = (order) => ({
  type: 'SET_CATEGORIES_SORT_ORDER',
  order
});
export const setCenterFooter = (isCenter) => ({
  type: "CENTER_FOOTER",
  centerFooter: isCenter
})
