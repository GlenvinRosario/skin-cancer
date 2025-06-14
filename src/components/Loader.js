
import React from "react";

export default function Loader() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div className="loader-spinner" />
      <style>{`
        .loader-spinner {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3498db;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
          margin: auto;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}
