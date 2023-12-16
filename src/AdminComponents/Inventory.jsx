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
      Control: "Access to Inventory stores should be secured...",
      Procedure: "Check if the inventory stores rooms...",
      Points: "8",
    },
    Requisition: {
      Control: "Completed requisitions will be forwarded to cost control...",
      Procedure: "Check if perpetual inventory records are kept...",
      Points: "4",
    },
    System: {
      Control: "Where inventory is held on the Balance Sheet...",
      Procedure: "For all items maintained in inventory, check if...",
      Points: "10",
    },
    Management: {
      Control: "Requisitions are approved by the manager/ supervisor...",
      Procedure:
        "1. Interview storekeeper on the process when inventory is transferred...",
      Points: "4",
    },
    Beverage: {
      Control:
        "Par beverage inventories have been established in all stores...",
      Procedure: "For each of the bars & restaurants:...",
      Points: "6",
    },
    Food: {
      Control: "Par Food inventories have been established in all stores...",
      Procedure: "For each of the food store:...",
      Points: "6",
    },
    Duties: {
      Control:
        "Segregation of duties exists for purchasing and receiving functions...",
      Procedure: "Check if these are applied on receiving:...",
      Points: "4",
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
