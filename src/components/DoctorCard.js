import React, { useState } from "react";
import "./DoctorCard.css"; // optional for styling
import { useNavigate } from "react-router-dom";
import Loader from "./Loader"; // import the loader component

export default function DoctorCard({ doctor }) {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!doctor) return null;

  const renderStars = (rating) => {
    const maxStars = 5;
    const filledStars = Math.floor(rating);
    const emptyStars = maxStars - filledStars;

    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <span key={`filled-${i}`} style={{ color: "gold" }}>
          ★
        </span>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} style={{ color: "#ccc" }}>
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="doctor-card">
      <h3>{doctor.name}</h3>
      <p>
        <strong>Education:</strong> {doctor.education}
      </p>
      <p>
        <strong>Address:</strong>{" "}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            doctor.address
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {doctor.address}
        </a>
      </p>
      <p>
        <strong>Phone:</strong>{" "}
        <a href={`tel:${doctor.phone}`}>{doctor.phone}</a>
      </p>


      {!imageLoaded && <Loader />}
      <img
        src={doctor.doctorImage}
        alt={doctor.name}
        style={{
          display: imageLoaded ? "block" : "none",
          width: "150px",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
        onLoad={() => setImageLoaded(true)}
      />

      <p>
        {renderStars(doctor.rating)} ({doctor.rating} / 5)
      </p>
      <button onClick={() => navigate(-1)}>Back to Form</button>
    </div>
  );
}
