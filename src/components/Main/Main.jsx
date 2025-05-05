import styles from "./Main.module.css";

import PlantList from "../PlantList/PlantList";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import FormModal from "../FormModal/FormModal";
import Button from "../Button/Button";
import { useState } from "react";

const Main = ({searchTerm}) => {
  const [isAddingPlant, setIsAddingPlant] = useState(false);

  const handleChange = () => {
    setIsAddingPlant(true);
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.toolsContainer}>
          <Filter />
          <Sort />
          <Button onClick={handleChange}>Add New</Button>
        </div>
        <PlantList searchTerm={searchTerm}/>
        {isAddingPlant && (
          <FormModal
            isAddingPlant={isAddingPlant}
            setIsAddingPlant={setIsAddingPlant}
          ></FormModal>
        )}
      </main>
    </>
  );
};

export default Main;
