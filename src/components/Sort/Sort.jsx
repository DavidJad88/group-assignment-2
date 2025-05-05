import styles from "./Sort.module.css";

const Sort = ({ onClick }) => {
  const handleChange = (e) => {
    onClick(e.target.value);
  };

  return (
    <>
      <select onChange={handleChange} className={styles.sortSelect}>
        <option value="">Sort by</option>
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>
    </>
  );
};

export default Sort;