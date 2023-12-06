import React, { useState } from "react";
import "./styles/App.css";
import AdminDashboard from "./AdminDashboard.js";
import CustomerDashboard from "./CustomerDashboard.js";

function App() {
  const [selectedDashboard, setSelectedDashboard] = useState(null);

  const handleAdminClick = () => {
    setSelectedDashboard("admin");
  };

  const handleCustomerClick = () => {
    setSelectedDashboard("customer");
  };

  return (
    <div>
      <header className="home-header">
        <div className="home-container">
          <img
            className="home-header-logo"
            src="/your-logo.png" // Replace with the path to your logo image
            alt="Logo"
          />
          <div>
            <h1 className="home-header-text">Hotel Internal Audit</h1>
            <p className="home-header-subtext">PT CHRISHERA CONSULTING GROUP</p>
          </div>
        </div>
      </header>

      {selectedDashboard === null && (
        <div className="home-btn-container">
          <button onClick={handleAdminClick} style={{ marginRight: "10px" }}>
            Admin
          </button>
          <button onClick={handleCustomerClick}>Customer</button>
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {selectedDashboard === "admin" && <AdminDashboard />}
        {selectedDashboard === "customer" && <CustomerDashboard />}
      </div>
    </div>
  );
}

export default App;
