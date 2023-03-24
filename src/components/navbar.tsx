import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search";

import styles from "./navbar.module.css";

const Navbar = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [subcategory, setSubcategory] = useState({ category: "", open: false });

  const handleSubmenuOpen = () => {
    setIsSubmenuOpen(true);
  };

  const handleSubmenuClose = () => {
    setIsSubmenuOpen(false);
  };

  const handleOpenSubcategory = (category: string) => {
    setSubcategory({ category: category, open: true });
  };

  const handleCloseSubcategory = (category: string) => {
    setSubcategory({ category: category, open: false });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul className={styles.menu}>
          <li
            className={styles.link}
            onMouseEnter={handleSubmenuOpen}
            onMouseLeave={handleSubmenuClose}
          >
            <Link to="/Technology" style={{ color: "#FFF" }}>
              ტექნიკა
            </Link>
            {isSubmenuOpen && (
              <ul className={styles.dropdownMenu}>
                <li
                  onMouseEnter={() => handleOpenSubcategory("mobiles")}
                  onMouseLeave={() => handleCloseSubcategory("mobiles")}
                >
                  <Link to="/Technology/mobiles">მობილურები</Link>
                  {subcategory.category === "mobiles" && subcategory.open && (
                    <ul className={styles.dropdown}>
                      <li>
                        <Link to="/Technology/mobiles/accsorsies">
                          აქსესუარები და ნაწილები
                        </Link>
                      </li>
                      <li>
                        <Link to="/Technology/mobiles/phones">
                          მობილური ტელეფონი
                        </Link>
                      </li>
                      <li>
                        <Link to="/Technology/mobiles/gps">GPS ნავიგატორი</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li
                  onMouseEnter={() => handleOpenSubcategory("computers")}
                  onMouseLeave={() => handleCloseSubcategory("computers")}
                >
                  <Link to="/Technology/computers">
                    კომპიუტერები, აქსესუარები
                  </Link>
                  {subcategory.category === "computers" && subcategory.open && (
                    <ul>
                      <li>
                        <Link to="/Technology/computers/laptops">
                          ლეპტოპები
                        </Link>
                      </li>
                      <li>
                        <Link to="/Technology/computers/pc">კომპიუტერები</Link>
                      </li>
                      <li>
                        <Link to="/Technology/computers/pc">მაუსები</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => handleOpenSubcategory("music")}
            onMouseLeave={() => handleCloseSubcategory("music")}
          >
            <Link to="/music" style={{ color: "#FFF" }}>
              მუსიკა
            </Link>
            {subcategory.category === "music" && subcategory.open && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link to="music/vinils">მუსიკალური ფირფიტები</Link>
                </li>
                <li>
                  <Link to="music/instruments">მუსიკალური ინსტრუმენტები</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/books" style={{ color: "#FFF" }}>
              წიგნები
            </Link>
          </li>
          <li>
            <Link to="/clothes" style={{ color: "#FFF" }}>
              ტანსაცმელები
            </Link>
          </li>
        </ul>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
