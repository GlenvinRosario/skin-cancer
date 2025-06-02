import React, { useRef, useState } from "react";
import DoctorCard from "./DoctorCard";
import "./AppointmentForm.css";
import doctorImage from "../images/doctor-image.jpg";
import { doctors } from "./doctors";
import { useNavigate } from "react-router-dom";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    address: "",
    mobile: "",
  });

  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && ["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      setImage(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid JPEG or PNG image.");
    }
  };

  const handleRemove = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null; // Reset file input
    }
  };

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    navigate(`/doctor/${doctor.id}`);
  };

  function remediesClick() {
    navigate("/remedies");
  }

  const fileInputRef = useRef(null);

  // const handleSkinCheck = () => {
  //   //Enter API HERe

  // }

  const handleSkinCheck = () => {
  if (image) {
    navigate("/skin-check-result", { state: { image } });
  }
};


  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          {/* Doctors dropdown button */}
          <li className="nav-item dropdown">
            <button className="button-rem">Find Doctors in my location</button>
            <ul className="dropdown-menu">
              {doctors &&
                doctors.map((doc) => (
                  <li
                    key={doc.id}
                    className="dropdown-item"
                    onClick={() => handleDoctorClick(doc)}
                    style={{ cursor: "pointer" }}
                  >
                    {doc.name}
                  </li>
                ))}
            </ul>
          </li>

          {/* Remedies button */}
          <li className="nav-item">
            <button className="button-rem" onClick={remediesClick}>
              Remedies to Follow
            </button>
          </li>
        </ul>
      </nav>

      {selectedDoctor && (
        <div className="top-section">
          <div className="doctor-card-wrapper">
            <DoctorCard doctor={selectedDoctor} />
          </div>
        </div>
      )}

      <div
        className="container"
        style={{ backgroundImage: `url(${doctorImage})` }}
      >
        <div className="form-container">
          <div className="form-left">
            <h2>Patient Information</h2>
            <input
              type="text"
              name="name"
              placeholder="Enter Patient Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-right">
            <h3>Upload Patient Image</h3>
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={handleImageUpload}
              ref={fileInputRef}
            />
            {image && (
              <img src={image} alt="Uploaded" className="preview-image" />
            )}
            {image && (
              <>
                <button onClick={handleRemove}>Remove</button>
                <button onClick={handleSkinCheck}>Check Skin</button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
