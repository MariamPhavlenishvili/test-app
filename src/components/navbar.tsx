import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search";

import styles from "./navbar.module.css";
import { categories } from "../menu/categories";

interface Category {
  mainCategory: string;
  subcategory: string[];
}

const Navbar = () => {
  const [mainCategory, setMainCategory] = useState("");
  const [subcategoryMenu, setSubcategoryMenu] = useState({
    category: "",
    open: false,
  });
  const [category, setCategory] = useState<Category>({
    mainCategory: "",
    subcategory: [],
  });

  const handleCategoryOpen = (categoryName: string) => {
    setCategory({ ...category, mainCategory: categoryName });
    setMainCategory(categoryName);
  };

  const handleCategoryClose = () => {
    setCategory({ mainCategory: "", subcategory: [] });
    setMainCategory("");
  };

  const handleSubcategoryOpen = (categoryName: string) => {
    setCategory({
      ...category,
      subcategory: [...category.subcategory, categoryName],
    });
    setSubcategoryMenu({ category: categoryName, open: true });
  };

  const handleSubcategoryClose = (categoryName: string) => {
    const removedCategory = category.subcategory.filter(
      (subCategory) => subCategory !== categoryName
    );
    setCategory({ ...category, subcategory: removedCategory });
    setSubcategoryMenu({ category: categoryName, open: false });
  };

  const handleSubSubCategoryOpen = (categoryName: string) => {
    setCategory({
      ...category,
      subcategory: [...category.subcategory, categoryName],
    });
  };

  const handleSubSubCategoryClose = (categoryName: string) => {
    const removedCategory = category.subcategory.filter(
      (subCategory) => subCategory !== categoryName
    );
    setCategory({ ...category, subcategory: removedCategory });
  };

  const onClick = () => {
    window._dataHub.dataHubService.setSiteName("myauto" as any);

    window._dataHub.dataHubService.setCategory({
      mainCategory: category.mainCategory,
      subcategory: category.subcategory,
    });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          {Object.entries(categories).map(([category, subcategories]) => (
            <li
              key={category}
              className={styles.link}
              onMouseEnter={() => handleCategoryOpen(category)}
              onMouseLeave={handleCategoryClose}
            >
              <Link to={`/category/${category}`} style={{ color: "#FFF" }}>
                {category}
              </Link>
              {mainCategory === category && (
                <ul className={styles.dropdownMenu}>
                  {Object.keys(subcategories).map((subcategory) => (
                    <li
                      key={subcategory}
                      onMouseEnter={() => handleSubcategoryOpen(subcategory)}
                      onMouseLeave={() => handleSubcategoryClose(subcategory)}
                    >
                      <Link
                        to={`/category/${category}/${subcategory}`}
                        onClick={onClick}
                      >
                        {subcategory}
                      </Link>
                      {subcategoryMenu.category === subcategory &&
                        subcategoryMenu.open && (
                          <ul className={styles.subsubmenu}>
                            {subcategories[subcategory].map(
                              (subsubcategory) => (
                                <li
                                  key={subsubcategory}
                                  onMouseEnter={() =>
                                    handleSubSubCategoryOpen(subsubcategory)
                                  }
                                  onMouseLeave={() =>
                                    handleSubSubCategoryClose(subsubcategory)
                                  }
                                >
                                  <Link
                                    to={`/category/${category}/${subcategory}/${subsubcategory}`}
                                    onClick={onClick}
                                  >
                                    {subsubcategory}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
