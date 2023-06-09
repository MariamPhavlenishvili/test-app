import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search";

import styles from "./navbar.module.css";
import { categories } from "../menu/categories";

interface Category {
  mainCategory: string;
  subCategory: string;
  subSubCategory: string;
}

const Navbar = () => {
  const [mainCategory, setMainCategory] = useState("");
  const [subcategoryMenu, setSubcategoryMenu] = useState({
    category: "",
    open: false,
  });
  const [category, setCategory] = useState<Category>({
    mainCategory: "",
    subCategory: "",
    subSubCategory: "",
  });

  const handleCategoryOpen = (categoryName: string) => {
    setCategory({ ...category, mainCategory: categoryName });
    setMainCategory(categoryName);
  };

  const handleCategoryClose = () => {
    setCategory({ mainCategory: "", subCategory: "", subSubCategory: "" });
    setMainCategory("");
  };

  const handleSubcategoryOpen = (subCategoryName: string) => {
    setCategory({
      ...category,
      subCategory: subCategoryName,
    });
    setSubcategoryMenu({ category: subCategoryName, open: true });
  };

  const handleSubcategoryClose = (subCategoryName: string) => {
    setCategory({ ...category, subCategory: "" });
    setSubcategoryMenu({ category: subCategoryName, open: false });
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
                      <Link to={`/category/${category}/${subcategory}`}>
                        {subcategory}
                      </Link>
                      {subcategoryMenu.category === subcategory &&
                        subcategoryMenu.open && (
                          <ul className={styles.subsubmenu}>
                            {subcategories[subcategory].map(
                              (subsubcategory) => (
                                <li
                                  key={subsubcategory}
                                  // onMouseEnter={() =>
                                  //   handleSubSubCategoryOpen(subsubcategory)
                                  // }
                                  // onMouseLeave={() =>
                                  //   handleSubSubCategoryClose(subsubcategory)
                                  // }
                                >
                                  <Link
                                    to={`/category/${category}/${subcategory}/${subsubcategory}`}
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
