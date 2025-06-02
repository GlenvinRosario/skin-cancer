import React from 'react';
import './SkinCancerCare.css';

const SkinCancerCare = () => {
  return (
    <div className="care-wrapper">

    <div className="care-container">
      <h2>Skin Cancer Care & Recovery Tips</h2>
      <ol className="care-list">
        <li>
          <strong>Follow Your Doctor’s Treatment Plan:</strong> Includes surgery, topical meds, radiation, chemo, or immunotherapy. Never skip or delay treatment without consulting your doctor.
        </li>
        <li>
          <strong>Protect Your Skin from Sun Exposure:</strong> Avoid midday sun. Use SPF 30+ sunscreen, wear hats, clothing, and sunglasses.
        </li>
        <li>
          <strong>Keep Your Skin Clean and Moisturized:</strong> Use gentle cleansers and safe moisturizers (ask your doctor).
        </li>
        <li>
          <strong>Monitor Your Skin Regularly:</strong> Check for changes in moles/spots. Attend follow-ups and report anything unusual.
        </li>
        <li>
          <strong>Healthy Lifestyle Choices:</strong> Eat antioxidant-rich foods, hydrate well, avoid smoking, limit alcohol.
        </li>
        <li>
          <strong>Emotional and Psychological Support:</strong> Join support groups or talk to loved ones. Mental health matters too.
        </li>
        <li>
          <strong>Avoid Irritants:</strong> Stay away from harsh products on treated skin areas.
        </li>
      </ol>
      <div className="care-note">
        <strong>Important:</strong> Always discuss home remedies or supplements with your dermatologist or oncologist.
      </div>
    </div>
    </div>
  );
};

export default SkinCancerCare;
