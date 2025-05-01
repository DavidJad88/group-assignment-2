import styles from "./PlantList.module.css";
import PlantCard from "../PlantCard/PlantCard";
import PlantModal from "../PlantModal/PlantModal";
import { database } from "../../../firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

const PlantList = () => {
  const [plantsCollection, setPlantsCollection] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [isViewingPlant, setIsViewingPlant] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, "plant-collection"),
      (snapshot) => {
        const plantData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(plantData);

        setPlantsCollection(plantData);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  // plant modal
  const handlePlantSelection = (plant) => {
    setSelectedPlant(plant);
    setIsViewingPlant(true);
  };

  const handleCloseModal = () => {
    setIsViewingPlant(false);
    setSelectedPlant(null);
  };

  return (
    <>
      <ul className={styles.plantListContainer}>
        {plantsCollection.map((plant) => {
          return (
            <PlantCard
              plant={plant}
              key={plant.id}
              onClick={() => handlePlantSelection(plant)}
            ></PlantCard>
          );
        })}
      </ul>
      {isViewingPlant && (
        <PlantModal
          selectedPlant={selectedPlant}
          onClick={() => handleCloseModal()}
        ></PlantModal>
      )}
    </>
  );
};

export default PlantList;
