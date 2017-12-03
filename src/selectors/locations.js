export default (locations, { sortOrder, groupedByCategory, category }) => {
console.log(category)
console.log(groupedByCategory)
  const isAlphabetically = (sortOrder === 'Alphabetically') ? true : false;
  if (groupedByCategory) {
    let locationsGroupedByCategory = {};
    locations.forEach((location) => {
      console.log(isAlphabetically)
      if (locationsGroupedByCategory[location.category.value]) {
        locationsGroupedByCategory[location.category.value].push(location)
      } else {
        locationsGroupedByCategory[location.category.value] = [];
        locationsGroupedByCategory[location.category.value].push(location)
      }
    });

    if (isAlphabetically) {
      return Object.keys(locationsGroupedByCategory).sort((a, b) => {
        return a[0] > b[0] ? 1 : -1;
      })
        .reduce((result, key) => {
          result[key] = locationsGroupedByCategory[key];
          result[key].sort((a, b) => {
            return a.name > b.name ? 1 : -1;
          })
          console.log(result)
          return result;
        }, {});

    }
    return locationsGroupedByCategory;
  }
  const filtered = locations.filter((location) => {
    if (category.value) {
      if (location.category.value.toLowerCase() === category.value.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }).sort((a, b) => {
    return (isAlphabetically && !groupedByCategory) ? (a.name > b.name ? 1 : -1) : '';
  });

  return filtered;
};