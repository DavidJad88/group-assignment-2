import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <label className={styles.searchLabel} htmlFor="search">
        🔎
      </label>
      <input
        className={styles.searchInput}
        type="search"
        name="search"
        id="search"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
