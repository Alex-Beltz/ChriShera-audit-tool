import React, { useState } from "react";
import "./styles/App.css";
import "./styles/AdminDashboard.css";

// Import the component files for each sidebar item
import Summary from "./AdminComponents/Summary.jsx";
import Inventory from "./AdminComponents/Inventory.jsx";
import AccountsReceivable from "./AdminComponents/AccountsReceivable.jsx";
import Cash from "./AdminComponents/Cash.jsx";
import FoodAndBeverage from "./AdminComponents/FoodandBeverage.jsx";
import HumanResources from "./AdminComponents/HumanResources.jsx";
import Expenditures from "./AdminComponents/Expenditures.jsx";
import Revenue from "./AdminComponents/Revenue.jsx";
import Rooms from "./AdminComponents/Rooms.jsx";
import SalesAndMarketing from "./AdminComponents/SalesandMarketing.jsx";
import AssetMaintenance from "./AdminComponents/AssetMaintenance.jsx";
import Systems from "./AdminComponents/Systems.jsx";
import FinancialReporting from "./AdminComponents/FinancialReporting.jsx";

function AdminDashboard() {
  // Define the list of items for the sidebar
  const sidebarItems = [
    "SUMMARY",
    "INVENTORY",
    "ACCOUNTS RECEIVABLE",
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

  // Create a mapping of sidebar items to their corresponding components
  const componentMap = {
    SUMMARY: <Summary />,
    INVENTORY: <Inventory />,
    "ACCOUNTS RECEIVABLE": <AccountsReceivable />,
    CASH: <Cash />,
    "FOOD & BEVERAGE": <FoodAndBeverage />,
    "HUMAN RESOURCES": <HumanResources />,
    EXPENDITURES: <Expenditures />,
    REVENUE: <Revenue />,
    ROOMS: <Rooms />,
    "SALES & MARKETING": <SalesAndMarketing />,
    "ASSET MAINTENANCE": <AssetMaintenance />,
    SYSTEMS: <Systems />,
    "FINANCIAL REPORTING": <FinancialReporting />,
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

export default AdminDashboard;
