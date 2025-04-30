import styles from "./PlantCard.module.css";

const PlantCard = ({ plant }) => {
  return (
    <li className={styles.plantCard}>
      <div className={styles.plantImageContainer}>
        <img src={plant.image} alt={plant.commonName} />
      </div>
      <div className={styles.plantNameContainer}>
        <h3>{plant.commonName}</h3>
        <p>{plant.scientificName}</p>
      </div>
    </li>
  );
};

export default PlantCard;
