import styles from "./PlantList.module.css";
import PlantCard from "../PlantCard/PlantCard";
const PlantList = () => {
  return (
    <>
      <ul className={styles.plantListContainer}>
        <PlantCard></PlantCard>
      </ul>
    </>
  );
};

export default PlantList;
