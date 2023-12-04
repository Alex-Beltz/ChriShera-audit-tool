import React, { useState } from "react";
import "./styles/App.css";

// Import the component files for each sidebar item
import Summary from "./components/Summary.jsx";
import Inventory from "./components/Inventory.jsx";
import AccountsReceivable from "./components/AccountsReceivable.jsx";
import Cash from "./components/Cash.jsx";
import FoodAndBeverage from "./components/FoodandBeverage.jsx";
import HumanResources from "./components/HumanResources.jsx";
import Expenditures from "./components/Expenditures.jsx";
import Revenue from "./components/Revenue.jsx";
import Rooms from "./components/Rooms.jsx";
import SalesAndMarketing from "./components/SalesandMarketing.jsx";
import AssetMaintenance from "./components/AssetMaintenance.jsx";
import Systems from "./components/Systems.jsx";
import FinancialReporting from "./components/FinancialReporting.jsx";

function App() {
  // Define the list of items for the sidebar
  const sidebarItems = [
    "SUMMARY",
    "INVENTORY",
    "Accounts Receivable",
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
    "Accounts Receivable": <AccountsReceivable />,
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

export default App;
