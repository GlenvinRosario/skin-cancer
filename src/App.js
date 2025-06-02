import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage.js";
import PatientForm from "./components/AppointmentForm.js";
import SkinCancerCare from "./components/SkinCancerCare.js";
import DoctorDetails from "./components/DoctorDetails.js";
import SkinCheckResult from "./components/SKinCheckResult.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/patient" element={<PatientForm />} />
        <Route path="/remedies" element={<SkinCancerCare />} />
         <Route path="/doctor/:id" element={<DoctorDetails />} />
          <Route path="/skin-check-result" element={<SkinCheckResult />} />
      </Routes>
    </Router>
  );
}

export default App;
