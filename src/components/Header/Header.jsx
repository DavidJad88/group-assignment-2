import styles from "./Header.module.css";
import Search from "../Search/Search";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headingContainer}>
          <h1>PlantPal</h1>
        </div>
        <Search />
      </header>
    </>
  );
};

export default Header;
