import styles from "./PlantCard.module.css";

const PlantCard = () => {
  return (
    <li className={styles.plantCard}>
      <div className={styles.plantImageContainer}>
        <img src="/assets/images/peace-lily.png" alt="peace lily" />
      </div>
      <div className={styles.plantNameContainer}>
        <h3>Peace Lily</h3>
        <p>Spathiphyllum wallisii</p>
      </div>
    </li>
  );
};

export default PlantCard;
