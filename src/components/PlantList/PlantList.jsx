import styles from "./PlantList.module.css";
import PlantCard from "../PlantCard/PlantCard";
import PlantModal from "../PlantModal/PlantModal";
import { database } from "../../../firebaseConfig";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

const PlantList = ({ searchTerm, plantFilter, sortPlants }) => {
  const [plantsCollection, setPlantsCollection] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [isViewingPlant, setIsViewingPlant] = useState(false);

  const filteredPlants = plantsCollection.filter((plant) =>
    plant.commonName.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  useEffect(() => {
    let queryRef = collection(database, "plant-collection");

    // filter
    if (plantFilter) {
      if (["toxic", "non-toxic"].includes(plantFilter)) {
        queryRef = query(queryRef, where("toxicity", "==", plantFilter));
      } else if (["low", "medium", "high"].includes(plantFilter)) {
        queryRef = query(queryRef, where("humidity", "==", plantFilter));
      }
    }

    // sort
    if (sortPlants) {
      queryRef = query(queryRef, orderBy("commonName", sortPlants));
    }

    const unsubscribe = onSnapshot(queryRef, (snapshot) => {
      const plantData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const sortedPlants = [...plantData].sort((a, b) => {
        const nameA = a.commonName?.toLowerCase().trim();
        const nameB = b.commonName?.toLowerCase().trim();

        if (sortPlants === "desc") {
          return nameB.localeCompare(nameA);
        }
        return nameA.localeCompare(nameB);
      });

      setPlantsCollection(sortedPlants);
    });

    return () => {
      unsubscribe();
    };
  }, [plantFilter, sortPlants]);

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
        {filteredPlants.map((plant) => {
          return (
            <PlantCard
              plant={plant}
              key={plant.id}
              onClick={() => handlePlantSelection(plant)}
            ></PlantCard>
          );
        })}
      </ul>

      {filteredPlants.length === 0 && (
        <p className={styles.noResults}>No result</p>
      )}

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