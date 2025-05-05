import styles from "./Main.module.css";
import PlantList from "../PlantList/PlantList";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import FormModal from "../FormModal/FormModal";
import Button from "../Button/Button";
import { useState } from "react";

const Main = () => {
  const [isAddingPlant, setIsAddingPlant] = useState(false);
  //states for search/sort/filter as props to PlantList
  const [plantFilter, setPlantFilter] = useState(null);
  const [sortPlants, setSortPlants] = useState(null);

  const handleChange = () => {
    setIsAddingPlant(true);
  };

  const handleFilterChange = (value) => {
    setPlantFilter(value);
  };

  const handleSortChange = (value) => {
    setSortPlants(value)
  }

  return (
    <>
      <main className={styles.main}>
        <div className={styles.toolsContainer}>
          <Filter onClick={handleFilterChange} />
          <Sort onClick={handleSortChange} />
          <Button onClick={handleChange}>Add New</Button>
        </div>

        <PlantList plantFilter={plantFilter} sortPlants={sortPlants} />

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