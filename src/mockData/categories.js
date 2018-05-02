function getCategories(data) {
  const categories = [];
  const inCat = id => categories.filter(cat => cat.id === id).length > 0;

  function addCategory(category, id = 'id', title = 'title') {
    categories.push({
      id: category[id],
      title: category[title],
    });
  }

  data.map((item) => {
    const category = item.categories[0];

    if (!inCat(category.main_id)) {
      addCategory(category, 'main_id', 'main_title');
    }

    if (category.hasOwnProperty('other_categories')) {
      category.other_categories.map((subCat) => {
        if (!inCat(subCat.id)) {
          addCategory(subCat);
        }
      });
    }
  });

  return categories;
}

export default getCategories;
