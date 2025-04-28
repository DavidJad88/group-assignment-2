import Form from "../Form/Form";
import styles from "./FormModal.module.css";

const FormModal = ({ isAddingPlant, setIsAddingPlant }) => {
  return (
    <div className={styles.formModal}>
      <Form isAddingPlant={isAddingPlant} setIsAddingPlant={setIsAddingPlant} />
    </div>
  );
};

export default FormModal;
