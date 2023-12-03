import React, { useState } from "react";
import "./styles/App.css";

function App() {
  // Define the list of items for the sidebar
  const sidebarItems = [
    "SUMMARY",
    "INVENTORY",
    "AR",
    "CASH",
    "FOOD & BEVERAGE",
    "HUMAN RESOURCES",
    "EXPENDITURES",
    "REVENUE",
    "ROOMS",
    "SALES & MARKETING",
    "ASSET MAINTENANCE",
    "SYSTEMS",
    "FINANCIAL REPORTING",
  ];

  // State to keep track of the selected item
  const [selectedItem, setSelectedItem] = useState(sidebarItems[0]);

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
        {/* Display content based on the selected item */}
        <h1>{selectedItem}</h1>
        {/* You can import and render the respective component based on the selected item */}
        {/* Example: {selectedItem === "SUMMARY" && <SummaryComponent />} */}
      </div>
    </div>
  );
}

export default App;
