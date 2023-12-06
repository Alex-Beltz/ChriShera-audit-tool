import React, { useState } from "react";
import "./styles/App.css";
import "./styles/CustomerDashboard.css";

// Import the component files for each sidebar item
import AuditChecklist from "./CustomerComponents/AuditChecklist.jsx";
import AuditReportandRecommendations from "./CustomerComponents/AuditReportandRecommendations.jsx";
import AuditSummaryandResult from "./CustomerComponents/AuditSummaryandResult.jsx";

function CustomerDashboard() {
  // Define the list of items for the sidebar
  const sidebarItems = [
    "AUDIT CHECKLIST",
    "AUDIT REPORT & RECOMMENDATIONS",
    "AUDIT SUMMARY & RESULT",
  ];

  // State to keep track of the selected item
  const [selectedItem, setSelectedItem] = useState(sidebarItems[0]);

  // Create a mapping of sidebar items to their corresponding components
  const componentMap = {
    "AUDIT CHECKLIST": <AuditChecklist />,
    "AUDIT REPORT & RECOMMENDATIONS": <AuditReportandRecommendations />,
    "AUDIT SUMMARY & RESULT": <AuditSummaryandResult />,
  };

  return (
    <div className="App">
      <div className="sidebar">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            className={`sidebar-item ${selectedItem === item ? "active" : ""}`}
            onClick={() => setSelectedItem(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="content">
        {/* Display the selected component */}
        {componentMap[selectedItem]}
      </div>
    </div>
  );
}

export default CustomerDashboard;
