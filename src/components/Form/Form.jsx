import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";
import { database } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const Form = ({ isAddingPlant, setIsAddingPlant }) => {
  const [plantDetails, setPlantDetails] = useState({
    commonName: "",
    scientificName: "",
    wateringSchedule: "",
    lightRequirement: "",
    soilType: "",
    temperatureRange: "",
    humidity: "",
    toxicity: "",
    previewUrl: null,
    image: null,
  });

  const [error, setError] = useState(null);

  const [formValidated, setFormValidated] = useState(null);

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (formValidated) {
      const interval = setTimeout(() => {
        setFormValidated(null);
      }, 3000);
      return () => clearTimeout(interval);
    }
  }, [formValidated]);

  // retrieving input values

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (e.target.type === "file") return;
    setPlantDetails((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: "" }));
  };

  // retrieving image upload, and creating temporary url
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const previewUrl = URL.createObjectURL(file);
      setPlantDetails((prevDetails) => ({
        ...prevDetails,
        image: file,
        previewUrl: previewUrl,
      }));
      setError((prevError) => ({ ...prevError, image: "" }));
      console.log(file);
    } else {
      setPlantDetails((prevDetails) => ({
        ...prevDetails,
        image: null,
        previewUrl: null,
      }));
      console.log("please upload a valid file format");
    }
  };

  const handleRemoveImage = () => {
    setPlantDetails((prevDetails) => ({
      ...prevDetails,
      image: null,
      previewUrl: null,
    }));
    setError((prevError) => ({ ...prevError, image: "" }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  //uploading image to cloudinary storage
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", plantDetails.image);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/upload`,
        { method: "POST", body: formData }
      );
      const data = await response.json();
      console.log("image URL", data.secure_url);
      console.log("Public ID", data.public_id);

      setPlantDetails((prevDetails) => ({
        ...prevDetails,
        previewUrl: data.secure_url,
      }));
      setError(null);

      return data.secure_url;
    } catch (error) {
      setError("Failed to upload the image");
      console.log(error.message);
      return null;
    }
  };

  const saveDataToFirestore = async (plant) => {
    try {
      const docRef = await addDoc(
        collection(database, "plant-collection"),
        plant
      );
      console.log("Plant has been added with the id", docRef.id);
    } catch (error) {
      console.log(error.message, "failed to store the plant");
    }
  };

  const ValidateInput = () => {
    const errorObj = { ...error };
    let isValid = true;

    if (!plantDetails.commonName.trim()) {
      errorObj.commonName = "Common name is required";
      isValid = false;
    } else {
      errorObj.commonName = "";
    }

    if (!plantDetails.scientificName.trim()) {
      errorObj.scientificName = "Scientific name is required";
      isValid = false;
    } else {
      errorObj.scientificName = "";
    }

    if (!plantDetails.wateringSchedule.trim()) {
      errorObj.wateringSchedule = "Watering schedule is required";
      isValid = false;
    } else {
      errorObj.wateringSchedule = "";
    }

    if (!plantDetails.lightRequirement.trim()) {
      errorObj.lightRequirement = "Light requirement is required";
      isValid = false;
    } else {
      errorObj.lightRequirement = "";
    }

    if (!plantDetails.soilType.trim()) {
      errorObj.soilType = "Soil type is required";
      isValid = false;
    } else {
      errorObj.soilType = "";
    }

    if (!plantDetails.temperatureRange) {
      errorObj.temperatureRange = "Please select a temperature range";
      isValid = false;
    } else {
      errorObj.temperatureRange = "";
    }

    if (!plantDetails.humidity) {
      errorObj.humidity = "Please select humidity";
      isValid = false;
    } else {
      errorObj.humidity = "";
    }

    if (!plantDetails.toxicity) {
      errorObj.toxicity = "Please select if toxic/non-toxic";
      isValid = false;
    } else {
      errorObj.toxicity = "";
    }

    if (!plantDetails.image) {
      errorObj.image = "Please upload an image";
      isValid = false;
    } else {
      errorObj.image = "";
    }

    setError(errorObj);

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formIsValid = ValidateInput();
    if (!formIsValid) {
      return;
    }

    try {
      const imageUrl = await uploadImage();
      const plantData = {
        ...plantDetails,
        image: imageUrl,
      };
      console.log(plantData);
      await saveDataToFirestore(plantData);
      setPlantDetails({
        commonName: "",
        scientificName: "",
        wateringSchedule: "",
        lightRequirement: "",
        soilType: "",
        temperatureRange: "",
        humidity: "",
        toxicity: "",
        previewUrl: null,
        image: null,
      });
    } catch (error) {
      console.log(error.message);
    }
    setFormValidated("Plant has been added");
  };

  // Closing the form modal, state from prop
  const handleCancel = () => {
    setIsAddingPlant(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Add new plant</h2>
      <div className={styles.formGroup}>
        <label htmlFor="common-name">Common name</label>
        <input
          type="text"
          name="commonName"
          id="common-name"
          maxLength={40}
          onChange={handleChange}
          value={plantDetails.commonName}
        />
        {error && (
          <p className={styles.validationMessage}>{error.commonName}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="scientific-name">Scientific name</label>
        <input
          type="text"
          name="scientificName"
          id="scientific-name"
          maxLength={40}
          onChange={handleChange}
          value={plantDetails.scientificName}
        />
        {error && (
          <p className={styles.validationMessage}>{error.scientificName}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="watering-schedule">Watering schedule</label>
        <input
          type="text"
          name="wateringSchedule"
          id="watering-schedule"
          maxLength={40}
          onChange={handleChange}
          value={plantDetails.wateringSchedule}
        />
        {error && (
          <p className={styles.validationMessage}>{error.wateringSchedule}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="light-requirement">Light requirement</label>
        <input
          type="text"
          name="lightRequirement"
          id="light-requirement"
          maxLength={40}
          onChange={handleChange}
          value={plantDetails.lightRequirement}
        />
        {error && (
          <p className={styles.validationMessage}>{error.lightRequirement}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="soil-type">Soil type</label>
        <input
          type="text"
          name="soilType"
          id="soil-type"
          maxLength={40}
          onChange={handleChange}
          value={plantDetails.soilType}
        />
        {error && <p className={styles.validationMessage}>{error.soilType}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="temperature-range">Temperature range</label>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            name="temperatureRange"
            id="cold"
            value={"Cold 5 - 15°C"}
            checked={plantDetails.temperatureRange === "Cold 5 - 15°C"}
            onChange={handleChange}
          ></input>
          <label htmlFor="cold">Cold 5 - 15°C</label>
        </div>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            name="temperatureRange"
            id="temperate"
            value={"Temperate 15 - 22°C"}
            checked={plantDetails.temperatureRange === "Temperate 15 - 22°C"}
            onChange={handleChange}
          ></input>
          <label htmlFor="temperate">Temperate 15 - 22°C</label>
        </div>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            name="temperatureRange"
            id="warm"
            value={"Warm 22 - 30°C"}
            checked={plantDetails.temperatureRange === "Warm 22 - 30°C"}
            onChange={handleChange}
          ></input>
          <label htmlFor="warm">Warm 22 - 30°C</label>
        </div>
        {error && (
          <p className={styles.validationMessage}>{error.temperatureRange}</p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="humidity">Humidity</label>
        <select
          name="humidity"
          id="humidity"
          onChange={handleChange}
          value={plantDetails.humidity}
        >
          <option value="">Select option</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        {error && <p className={styles.validationMessage}>{error.humidity}</p>}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="toxicity">Toxicity</label>
        <select
          name="toxicity"
          id="toxicity"
          onChange={handleChange}
          value={plantDetails.toxicity}
        >
          <option value="">Select option</option>
          <option value="toxic">Toxic</option>
          <option value="non-toxic">Non-toxic</option>
        </select>
        {error && <p className={styles.validationMessage}>{error.toxicity}</p>}
      </div>

      <div className={styles.uploadGroup}>
        <label htmlFor="imageUpload">
          Please upload an image of your plant
        </label>
        <input
          type="file"
          name="imageUpload"
          id="imageUpload"
          accept=".jpg .png .jpeg"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        {error && <p className={styles.validationMessage}>{error.image}</p>}
      </div>
      {plantDetails.previewUrl && (
        <div className={styles.imagePreviewContainer}>
          <img
            src={plantDetails.previewUrl}
            alt="plant image preview"
            className={styles.imagePreview}
          />
          <button
            className={styles.removeImageButton}
            onClick={handleRemoveImage}
          >
            Upload a different image
          </button>
        </div>
      )}
      <div className={styles.buttonContainer}>
        {formValidated && (
          <p className={styles.validFormMessage}>{formValidated}</p>
        )}
        <Button className={styles.secondaryButton} onClick={handleCancel}>
          Cancel
        </Button>
        <Button>Add</Button>
      </div>
    </form>
  );
};

export default Form;
