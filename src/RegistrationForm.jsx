import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  const courses = ["Biology", "Computer Science", "Commerce", "Humanities"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let validationErrors = {};
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.address) validationErrors.address = "Address is required";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) validationErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = "Enter a valid email address";
    if (!formData.gender) validationErrors.gender = "Gender is required";
    if (!formData.dob) validationErrors.dob = "Date of Birth is required";
    if (!formData.course) validationErrors.course = "Please select a course";
    return validationErrors;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert(`Data stored successfully:\n${JSON.stringify(formData, null, 2)}`);
      setFormData({
        name: "",
        address: "",
        mobile: "",
        email: "",
        gender: "",
        dob: "",
        course: "",
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      address: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      course: "",
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleRegister} style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Admission Form</h2>

      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </label>

      <label>
        Address:
        <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
        {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
      </label>

      <label>
        Mobile:
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
        {errors.mobile && <p style={{ color: "red" }}>{errors.mobile}</p>}
      </label>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </label>

      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
      </label>

      <label>
        Date of Birth:
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        {errors.dob && <p style={{ color: "red" }}>{errors.dob}</p>}
      </label>

      <label>
        Course:
        <select name="course" value={formData.course} onChange={handleChange}>
          <option value="">Select Course</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>
        {errors.course && <p style={{ color: "red" }}>{errors.course}</p>}
      </label>

      <div style={{ marginTop: "20px" }}>
        <button type="submit">Register</button>
        <button type="button" onClick={handleCancel} style={{ marginLeft: "10px" }}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
