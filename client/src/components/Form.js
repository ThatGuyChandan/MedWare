import React, { useState } from "react";
import axios from "axios";

const Form = ({ formType }) => {
  const [formData, setFormData] = useState({
    name: "",
    countryCode: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({});

  const countryCodes = ["+1", "+20", "+31", "+54", "+60", "+91"];

  const validate = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    } else if (!/^[A-Za-z]+$/.test(formData.name)) {
      errors.name = "Name must contain only letters";
    }

    if (!formData.countryCode) {
      errors.countryCode = "country code is required";
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number must contain only digits";
    }

    return errors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:5000/submit", { ...formData, formType })
        .then((response) => {
          alert(response.data);
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  };

  return (
    <div className="form-box">
      <div>
        <h1>{formType}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div className="country">
          <label>Country Code:</label>
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
          >
            <option value="">Select</option>
            {countryCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          {errors.countryCode && <span>{errors.countryCode}</span>}
        </div>
        <div className="number">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
