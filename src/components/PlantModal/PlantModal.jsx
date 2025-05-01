import styles from "./PlantModal.module.css";
import Button from "../Button/Button";
const PlantModal = ({ selectedPlant, onClick }) => {
  return (
    <div className={styles.plantModal}>
      <div className={styles.plantModalContent}>
        <div className={styles.plantModalImageContainer}>
          <img
            className={styles.plantModalImage}
            src={selectedPlant.image}
            alt={selectedPlant.commonName}
          />
          <Button onClick={onClick} className={styles.closeModalButton}>
            X
          </Button>
        </div>
        <div className={styles.plantModalDescriptionContainer}>
          <div className={styles.plantDescriptionContainer}>
            <h3>Common Name:</h3>
            <p>{selectedPlant.commonName}</p>
          </div>
          <div className={styles.plantDescriptionContainer}>
            <h3>Scientific Name:</h3>
            <p>{selectedPlant.scientificName}</p>
          </div>
          <div className={styles.plantDescriptionContainer}>
            <h3>Toxicity</h3>
            <p>{selectedPlant.toxicity}</p>
          </div>
          <div className={styles.plantDescriptionContainer}>
            <h3>Watering Schedule:</h3>
            <p>{selectedPlant.wateringSchedule}</p>
          </div>
          <div className={styles.plantDescriptionContainer}>
            <h3>Soil Type:</h3>
            <p>{selectedPlant.soilType}</p>
          </div>
          <div className={styles.plantDescriptionContainer}>
            <h3>Preferred Humidity:</h3>
            <p>{selectedPlant.humidity}</p>
          </div>
          <div className={styles.plantDescriptionContainer}>
            <h3>Light Requirements:</h3>
            <p>{selectedPlant.lightRequirement}</p>
          </div>
          <div className={styles.plantDescriptionContainer}>
            <h3>Preferred Temperature Range:</h3>
            <p>{selectedPlant.temperatureRange}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantModal;
