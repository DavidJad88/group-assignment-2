import styles from "./Search.module.css";

const Search = ({setSearchTerm}) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  };

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
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
