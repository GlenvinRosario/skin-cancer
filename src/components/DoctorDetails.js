import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import { doctors } from "./doctors";
import "./DoctorDetails.css";

export default function DoctorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find(doc => doc.id === parseInt(id));

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="doctor-details-page">
     
      <div className="doctor-card-container">
        <DoctorCard doctor={doctor} />
      </div>
      {/* You can add more doctor details here if needed */}
    </div>
  );
}