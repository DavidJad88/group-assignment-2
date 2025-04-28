import Button from "../Button/Button";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <h2 className={styles.formTitle}>Add new plant</h2>
      <div className={styles.formGroup}>
        <label htmlFor="common-name">Common name</label>
        <input type="text" name="commonName" id="common-name"/>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="scientific-name">Scientific name</label>
        <input type="text" name="scientificName" id="scientific-name"/>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="watering-schedule">Watering schedule</label>
        <input type="text" name="wateringSchedule" id="watering-schedule"/>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="light-requirement">Light requirement</label>
        <input type="text" name="lightRequirement" id="light-requirement"/>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="soil-type">Soil type</label>
        <input type="text" name="soilType" id="soil-type"/>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="temperature-range">Temperature range</label>
        <div className={styles.radioContainer}>
          <input type="radio" name="temperatureRange" id="cold" value={"cold"}></input>
          <label htmlFor="cold">Cold 5 - 15°C</label>
        </div>
        <div className={styles.radioContainer}>
          <input type="radio" name="temperatureRange" id="temperate" value={"temperate"}></input>
          <label htmlFor="temperate">Temperate 15 - 22°C</label>
        </div>
        <div className={styles.radioContainer}>
          <input type="radio" name="temperatureRange" id="warm" value={"warm"}></input>
          <label htmlFor="warm">Warm 22 - 30°C</label>
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="humidity">Humidity</label>
        <select name="humidity" id="humidity">
          <option value="">Select option</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="toxicity">Toxicity</label>
        <select name="toxicity" id="toxicity">
          <option value="">Select option</option>
          <option value="toxic">Toxic</option>
          <option value="non-toxic">Non-toxic</option>
        </select>
      </div>
      <div className={styles.buttonContainer}>
        <Button className={styles.secondaryButton}>Cancel</Button>
        <Button>Add</Button>
      </div>
    </form>
  )
};

export default Form;
