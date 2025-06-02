// SkinCheckResult.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SkinCheckResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const { image } = location.state || {};

  // Simulate skin check logic (replace with API if needed)
  const isCancerous = Math.random() < 0.5; // Random true/false for demo

  if (!image) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>No image found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Skin Check Result</h2>
      <img
        src={image}
        alt="Uploaded Skin"
        style={{ width: "300px", height: "auto", borderRadius: "8px", margin: "1rem 0" }}
      />
      <h3 style={{ color: isCancerous ? "red" : "green" }}>
        {isCancerous ? "Result: Cancerous" : "Result: Non-Cancerous"}
      </h3>
      <button onClick={() => navigate("/patient")}>Go Home</button>
    </div>
  );
}
