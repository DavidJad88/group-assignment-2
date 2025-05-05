import styles from "./Header.module.css";
import Search from "../Search/Search";

const Header = ({setSearchTerm}) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headingContainer}>
          <h1>PlantPal</h1>
        </div>
        <Search setSearchTerm={setSearchTerm}/>
      </header>
    </>
  );
};

export default Header;
