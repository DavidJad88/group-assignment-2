import styles from "./PlantList.module.css";
import PlantCard from "../PlantCard/PlantCard";
import { database } from "../../../firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

const PlantList = () => {
  const [plantsCollection, setPlantsCollection] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(database, "plant-collection"),
      (snapshot) => {
        const plantData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPlantsCollection(plantData);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <ul className={styles.plantListContainer}>
        {plantsCollection.map((plant) => {
          return <PlantCard plant={{ plant }} key={plant.id}></PlantCard>;
        })}
      </ul>
    </>
  );
};

export default PlantList;
