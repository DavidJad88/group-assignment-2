import styles from "./Filter.module.css";
import Button from "../Button/Button";

const Filter = ({ onClick }) => {
  const handleChange = (e) => {
    onClick(e.target.value);
  };
  return (
    <>
      <select onChange={handleChange} className={styles.filterSelect}>
        <option defaultChecked value="">
          Select filter option
        </option>
        <option value="toxic">Toxic</option>
        <option value="non-toxic">Non-toxic</option>
        <option value="low">Low Humidity</option>
        <option value="medium">Medium Humidity</option>
        <option value="high">High Humidity</option>
      </select>
    </>
  );
};

export default Filter;
