import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";

const Form = () => {
  const [formData, setFormData] = useState({
    commonName: "",
    scientificName: "",
    wateringSchedule: "",
    lightRequirement: "",
    soilType: "",
    temperatureRange: "",
    humidity: "",
    toxicity: "",
  })

  const [error, setError] = useState(null);

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData((prevData)=>(
      {...prevData, [name]: value}
    ))
  };

  return (
    <form className={styles.form}>
      <h2 className={styles.formTitle}>Add new plant</h2>
      <div className={styles.formGroup}>
        <label htmlFor="common-name">Common name</label>
        <input type="text" name="commonName" id="common-name" onChange={handleChange}
        value={formData.commonName}/>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="scientific-name">Scientific name</label>
        <input type="text" name="scientificName" id="scientific-name" onChange={handleChange}
        value={formData.scientificName}/>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="watering-schedule">Watering schedule</label>
        <input type="text" name="wateringSchedule" id="watering-schedule" onChange={handleChange}
        value={formData.wateringSchedule}/>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="light-requirement">Light requirement</label>
        <input type="text" name="lightRequirement" id="light-requirement" onChange={handleChange}
        value={formData.lightRequirement}/>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="soil-type">Soil type</label>
        <input type="text" name="soilType" id="soil-type" onChange={handleChange}
        value={formData.soilType}/>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="temperature-range">Temperature range</label>
        <div className={styles.radioContainer}>
          <input type="radio" name="temperatureRange" id="cold" value={"cold"} onChange={handleChange}></input>
          <label htmlFor="cold">Cold 5 - 15°C</label>
        </div>
        <div className={styles.radioContainer}>
          <input type="radio" name="temperatureRange" id="temperate" value={"temperate"} onChange={handleChange}></input>
          <label htmlFor="temperate">Temperate 15 - 22°C</label>
        </div>
        <div className={styles.radioContainer}>
          <input type="radio" name="temperatureRange" id="warm" value={"warm"} onChange={handleChange}></input>
          <label htmlFor="warm">Warm 22 - 30°C</label>
        </div>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="humidity">Humidity</label>
        <select name="humidity" id="humidity" onChange={handleChange} value={formData.humidity}>
          <option value="">Select option</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="toxicity">Toxicity</label>
        <select name="toxicity" id="toxicity" onChange={handleChange} value={formData.toxicity}>
          <option value="">Select option</option>
          <option value="toxic">Toxic</option>
          <option value="non-toxic">Non-toxic</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="imageUpload">
          Please upload an image of your plant
        </label>
        <input type="file" name="imageUpload" id="imageUpload" />
      </div>
      <div className={styles.buttonContainer}>
        <Button className={styles.secondaryButton}>Cancel</Button>
        <Button>Add</Button>
      </div>
    </form>
  )
};

export default Form;
