 const categoriesList = document.getElementById('categories');
    const categoryItems = categoriesList.querySelectorAll('li.item');
    console.log(`Кількість категорій: ${categoryItems.length}`);
    categoryItems.forEach((categoryItem) => {
      const categoryTitle = categoryItem.querySelector('h2').textContent;
      const itemsInCategory = categoryItem.querySelectorAll('li');
      console.log(`Категорія: ${categoryTitle}, Кількість елементів: ${itemsInCategory.length}`);
    });