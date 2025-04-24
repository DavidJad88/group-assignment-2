import styles from "./Main.module.css";

import PlantList from "../PlantList/PlantList";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import FormModal from "../FormModal/FormModal";
import Button from "../Button/Button";

const Main = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.toolsContainer}>
          <Filter />
          <Sort />
          <Button>Add New</Button>
        </div>
        <PlantList />
      </main>
    </>
  );
};

export default Main;
