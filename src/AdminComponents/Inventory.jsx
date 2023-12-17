// import React, { useState } from "react";
// import "../styles/All.css";
// import "../styles/AdminComps.css";

// function Inventory() {
//   const functionName = "Inventory"; // Dynamically get the function name
//   const [showModal, setShowModal] = useState(false);
//   const [showNotesModal, setShowNotesModal] = useState(false);
//   const [rating, setRating] = useState(null);
//   const [comments, setComments] = useState("");
//   const [advise, setAdvise] = useState("");
//   const [evidence, setEvidence] = useState("");
//   const [isModalActive, setIsModalActive] = useState(false); // Control UI interaction

//   const [storedData, setStoredData] = useState({
//     functionName, // Store the function name
//     buttonName: "",
//     rating: "",
//     comments: "",
//     advise: "",
//     evidence: "",
//   });

//   const handleButtonClick = (buttonName) => {
//     setShowModal(true);
//     setStoredData({
//       ...storedData,
//       buttonName,
//     });
//   };

//   const handleRatingChange = (value) => {
//     if (!showNotesModal) {
//       setRating(value);
//     }
//   };

//   const handleSave = () => {
//     if (rating === null) {
//       alert(
//         "No rating has been recorded, please select a rating before saving."
//       );
//     } else {
//       const newData = {
//         ...storedData,
//         modalName: "instructions-modal",
//         rating,
//       };
//       setStoredData(newData);
//       setShowModal(false);
//       setIsModalActive(false);
//     }
//   };

//   const handleNotesButtonClick = () => {
//     setShowNotesModal(true);
//     setIsModalActive(true); // Disable UI interaction
//   };

//   const handleNotesSave = () => {
//     if (
//       comments.trim() === "" &&
//       advise.trim() === "" &&
//       evidence.trim() === ""
//     ) {
//       alert("Please fill in at least one field in the Notes modal.");
//       return;
//     }

//     const newData = {
//       ...storedData,
//       modalName: "notes-modal",
//       comments,
//       advise,
//       evidence,
//     };
//     setStoredData(newData);
//     setShowNotesModal(false);
//     setIsModalActive(false); // Enable UI interaction
//   };

import React, { useState } from "react";
import "../styles/All.css";
import "../styles/AdminComps.css";

function Inventory() {
  const categoryName = "Inventory"; // The category name
  const [showModal, setShowModal] = useState(false);
  const [showNotesModal, setShowNotesModal] = useState(false);
  const [rating, setRating] = useState(null);
  const [comments, setComments] = useState("");
  const [advise, setAdvise] = useState("");
  const [evidence, setEvidence] = useState("");
  const [isModalActive, setIsModalActive] = useState(false); // Control UI interaction

  // Data structure to store results for each category's aspects
  const aspectCriteria = {
    Access: {
      Control: `Access to Inventory stores should be secured with lock and key, and restricted to assigned staff. The hotel will develop a key policy.`,
      Procedure: `Check if the inventory stores rooms:
      1. Secured by lock and key
      2. Accesses restricted to assigned associates
      3. Is key and access are documented on Log Book if using hard key?
      4. Is a documented key policy in place and adhered to?
      
      In order to answer YES, all elements must be satisfied.`,
      Points: `8`,
    },
    Requisition: {
      Control: `Completed requisitions will be forwarded to cost control for entry into the perpetual inventory system (within one working day where cost/benefit supports it, otherwise at a minimum within two working days) and subsequent filing for permanent record. If a cost control function is not in place, the requisition will be entered into the system by the inventory clerks or in their absence by a member of the accounting department.

      It is accepted that the involvement of the inventory clerk in updating the perpetual inventory system undermines the concept of segregation of duties. As a compensating control accounting will be required, on a surprise basis, to take a random sample of requisitions and trace them through to the updated inventory account.`,
      Procedure: `Check if perpetual inventory records are kept:
      1. Are they updated (within one working day, otherwise at a maximum within two working days) for both purchases received and requisitions made and signed as evidence of this
      2. Where updates are not performed by a cost control function, does the accounting department carry out documented, random surprise spot checks on at least a quarterly basis, between purchase requests/ requisitions and recorded inventory?
      
      In order to answer YES, both elements must be satisfied.
      
      Note: If inventory is expensed directly , you may answer N/A.`,
      Points: `4`,
    },
    System: {
      Control: `Where inventory is held on the Balance Sheet and a perpetual inventory system is in place, all material variances between the perpetual inventory and the physical count should be investigated, resolved and signed-off by the Finance Lead.

      Note:  Please answer 'N/A' where no inventory is held on the Balance Sheet  or no perpetual inventory system is in place`,
      Procedure: `For all items maintained in inventory, check if :
      1. Cyclical inventory counts must be performed for all stores, including sub-stores such as the F&B outlets. The counts will be structured in such a way that all items are counted at least once a quarter.
      2. All inventory counts must be performed or supervised by an individual independent of the stores.
      3. Stock counts must be blind, i.e. lines of stock are counted and the physical count reconciled to the perpetual inventory record.
      4. All material variances between the perpetual inventory and the physical count will be investigated. The Finance Leader is required to review and sign document, investigate and resolved the imbalance stock.
      5. If a material write-down of stock is anticipated, approvals consistent with the levels set for purchasing should be obtained.`,
      Points: `10`,
    },
    Management: {
      Control: `Requisitions are approved by the manager/ supervisor before inventory is removed from  storerooms.  Requisitions are signed by both the storeroom and the outlet associate upon delivery of order.`,
      Procedure: `1. Interview storekeeper on the process when inventory is transferred out of store, either by using inventory system or manual transfer.
        2. Sample several requisition or internal transfer forms to verify if there are signatures of storeroom and outlet associates.`,
      Points: `4`,
    },
    Beverage: {
      Control: `Par beverage inventories have been established in all stores and copies of these must be available at the F&B venue.
        1. The food and beverage manager, in conjunction with the bar manager/captain will be tasked with establishing the par levels. These should be communicated to the cost controller or in his absence the accounting department.
        2. Periodically, and at least quarterly, food and beverage management will spot-check the food and beverage stores to ensure par stock levels are maintained. This check will be evidenced.
        3. Inter-outlet requisitioning must be limited to emergency situations only, and a procedure to control and record such transfers must be setup and documented.`,
      Procedure: `For each of the bars & restaurants: 
      1. Are par inventory levels established by the F&B Manager (or appropriate designate) and available at each venue
      2. On at least a quarterly basis is a surprise spot check carried out and documented by the F&B Manager (or appropriate designate) to ensure that par liquor inventory levels are maintained; AND
      3. Is this spot check documented? 
      
      In order to answer YES to this question, ALL elements must be satisfied.`,
      Points: `6`,
    },
    Food: {
      Control: `Par Food inventories have been established in all stores and copies of these must be available at the kitchen.
      1. The Chef will be tasked with establishing the par levels. These should be communicated to the cost controller or in his absence the accounting department.
      2. Periodically, and at least quarterly, Chef will spot-check the food and beverage stores to ensure par stock levels are maintained. This check will be evidenced.
      3. Inter-kitchen requisitioning must be limited to emergency situations only, and a procedure to control and record such transfers must be setup and documented.`,
      Procedure: `For each of the food store: 
      1. Are par inventory levels established by the Chef(or appropriate designate) and available at Kitchen
      2. On at least a quarterly basis is a surprise spot check carried out and documented by Chef (or appropriate designate) to ensure that par food inventory levels are maintained; AND
      3. Is this spot check documented? 
      
      In order to answer YES to this question, ALL elements must be satisfied.`,
      Points: `6`,
    },
    Duties: {
      Control: `Segregation of duties exists for purchasing and receiving functions. If a purchasing and receiving department cannot be segregated due to limited staffing models, mitigating controls are implemented. Item received are properly controlled and checked by receiving staff.`,
      Procedure: `Check if these are applied on receiving:
      1. Is a sufficient separation between functions respected for the order, goods receipt and invoice verification (minimum 2 people are involved in these tasks ) ?
      2. Are products delivered formally cross-checked against the order at the time of delivery (quantity, quality, weight, etc.)? 
      
      In order to answer YES, all elements must be satisfied.`,
      Points: `4`,
    },
  };

  const [selectedAspect, setSelectedAspect] = useState("Access"); // Default aspect

  // Function to handle aspect change
  const handleAspectChange = (aspect) => {
    setSelectedAspect(aspect);
    setRating(null);
    setComments("");
    setAdvise("");
    setEvidence("");
  };

  // Function to get comments for the current aspect
  const getCommentsForAspect = (aspect) => {
    return aspectCriteria[aspect]["Audit-Results"].comments;
  };

  // Function to get advise for the current aspect
  const getAdviseForAspect = (aspect) => {
    return aspectCriteria[aspect]["Audit-Results"].advise;
  };

  // Function to get evidence for the current aspect
  const getEvidenceForAspect = (aspect) => {
    return aspectCriteria[aspect]["Audit-Results"].evidence;
  };

  // Store data for each aspect in explicitly named objects
  const [aspectAuditResult, setaspectAuditResult] = useState({
    Access: {
      "Audit-Results": {
        categoryName,
        aspectName: "Access",
        rating: null,
        comments: "",
        advise: "",
        evidence: "",
      },
    },
    Requisition: {
      "Audit-Results": {
        categoryName,
        aspectName: "Requisition",
        rating: null,
        comments: "",
        advise: "",
        evidence: "",
      },
    },
    System: {
      "Audit-Results": {
        categoryName,
        aspectName: "System",
        rating: null,
        comments: "",
        advise: "",
        evidence: "",
      },
    },
    Management: {
      "Audit-Results": {
        categoryName,
        aspectName: "Management",
        rating: null,
        comments: "",
        advise: "",
        evidence: "",
      },
    },
    Beverage: {
      "Audit-Results": {
        categoryName,
        aspectName: "Beverage",
        rating: null,
        comments: "",
        advise: "",
        evidence: "",
      },
    },
    Food: {
      "Audit-Results": {
        categoryName,
        aspectName: "Food",
        rating: null,
        comments: "",
        advise: "",
        evidence: "",
      },
    },
    Duties: {
      "Audit-Results": {
        categoryName,
        aspectName: "Duties",
        rating: null,
        comments: "",
        advise: "",
        evidence: "",
      },
    },
    // Add more aspects as needed
  });

  // Update the aspectAuditResult object when inputs change
  const handleRatingChange = (value) => {
    setRating(value);
    setaspectAuditResult({
      ...aspectAuditResult,
      [selectedAspect]: {
        ...aspectAuditResult[selectedAspect],
        "Audit-Results": {
          ...aspectAuditResult[selectedAspect]["Audit-Results"],
          rating: value,
        },
      },
    });
  };

  const handleCommentsChange = (value) => {
    setComments(value);
    setaspectAuditResult({
      ...aspectAuditResult,
      [selectedAspect]: {
        ...aspectAuditResult[selectedAspect],
        "Audit-Results": {
          ...aspectAuditResult[selectedAspect]["Audit-Results"],
          comments: value,
        },
      },
    });
  };

  const handleAdviseChange = (value) => {
    setAdvise(value);
    setaspectAuditResult({
      ...aspectAuditResult,
      [selectedAspect]: {
        ...aspectAuditResult[selectedAspect],
        "Audit-Results": {
          ...aspectAuditResult[selectedAspect]["Audit-Results"],
          advise: value,
        },
      },
    });
  };

  const handleEvidenceChange = (value) => {
    setEvidence(value);
    setaspectAuditResult({
      ...aspectAuditResult,
      [selectedAspect]: {
        ...aspectAuditResult[selectedAspect],
        "Audit-Results": {
          ...aspectAuditResult[selectedAspect]["Audit-Results"],
          evidence: value,
        },
      },
    });
  };

  // Function to handle modal activation and background UI disablement
  const handleModalActivation = () => {
    setShowModal(true);
    setIsModalActive(true); // Disable background UI interaction
  };

  const handleSave = () => {
    if (rating === null) {
      alert(
        "No rating has been recorded, please select a rating before saving."
      );
    } else {
      // Update aspectAuditResult for the current aspect
      setaspectAuditResult({
        ...aspectAuditResult,
        [selectedAspect]: {
          ...aspectAuditResult[selectedAspect],
          "Audit-Results": {
            ...aspectAuditResult[selectedAspect]["Audit-Results"],
            rating: rating,
          },
        },
      });

      setShowModal(false);
      setIsModalActive(false);
    }
  };

  const handleNotesButtonClick = () => {
    setShowNotesModal(true);
    setIsModalActive(true); // Disable UI interaction
  };

  const handleNotesSave = () => {
    if (
      comments.trim() === "" &&
      advise.trim() === "" &&
      evidence.trim() === ""
    ) {
      alert("Please fill in at least one field in the Notes modal.");
      return;
    }

    // Update aspectAuditResult for the current aspect with comments, advise, and evidence
    setaspectAuditResult({
      ...aspectAuditResult,
      [selectedAspect]: {
        ...aspectAuditResult[selectedAspect],
        "Audit-Results": {
          ...aspectAuditResult[selectedAspect]["Audit-Results"],
          comments: comments,
          advise: advise,
          evidence: evidence,
        },
      },
    });

    setShowNotesModal(false);
    setIsModalActive(false);
  };

  return (
    <div className="Admin-tool-container">
      <div className="btn-grid">
        {Object.keys(aspectCriteria).map((aspect) => (
          <button
            key={aspect}
            onClick={() => {
              handleAspectChange(aspect);
              setShowModal(true);
              console.log(aspect);
            }}
          >
            {aspect}
          </button>
        ))}
      </div>
      {showModal && (
        <div className="instructions-modal">
          <div className="instructions-modal-content">
            <div className="instructions-modal-header">
              <div>Store</div> <div></div>Inventory{" "}
              <div>Points: {aspectCriteria[selectedAspect].Points}</div>
              <div className="instructions-modal-btns">
                <button className="save-button" onClick={handleSave}>
                  Save
                </button>
                <button
                  className="close-button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
            <div className="instructions-modal-grid">
              <div>
                <h2>Control</h2>
                <p>{aspectCriteria[selectedAspect].Control}</p>
              </div>
              <div>
                <h2>Procedure</h2>
                <p>{aspectCriteria[selectedAspect].Procedure}</p>
              </div>

              <div className="rating-container">
                <h2>Rating</h2>
                <div>
                  <input
                    type="radio"
                    id="yes"
                    name="rating"
                    value="green"
                    checked={rating === "green"}
                    onChange={() => handleRatingChange("green")}
                  />
                  <label htmlFor="yes">Yes</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="no"
                    name="rating"
                    value="red"
                    checked={rating === "red"}
                    onChange={() => handleRatingChange("red")}
                  />
                  <label htmlFor="no">No</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="na"
                    name="rating"
                    value="yellow"
                    checked={rating === "yellow"}
                    onChange={() => handleRatingChange("yellow")}
                  />
                  <label htmlFor="na">N/A</label>
                </div>
              </div>
              <button className="notes-button" onClick={handleNotesButtonClick}>
                Notes
              </button>
            </div>
          </div>
        </div>
      )}
      {showNotesModal && (
        <div className="notes-modal">
          <div className="notes-modal-content">
            <div className="notes-modal-header">Notes</div>
            <div className="notes-grid">
              <div>
                <h2>Comments</h2>
                <textarea
                  className="comments-notes"
                  rows="15"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </div>
              <div>
                <h2>Advise</h2>
                <textarea
                  className="advise-notes"
                  rows="15"
                  value={advise}
                  onChange={(e) => setAdvise(e.target.value)}
                />
              </div>
              <div>
                <h2>Evidence</h2>
                <textarea
                  className="evidence-notes"
                  rows="15"
                  value={evidence}
                  onChange={(e) => setEvidence(e.target.value)}
                />
              </div>
            </div>
            <div className="notes-btn-cont">
              <button className="notes-save-button" onClick={handleNotesSave}>
                Save
              </button>
              <button
                className="notes-close-button"
                onClick={() => {
                  setShowNotesModal(false);
                  setIsModalActive(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Inventory;
