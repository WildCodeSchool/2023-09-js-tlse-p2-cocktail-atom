import React, { useState } from "react";
import "./AlertAge.scss";
import { useData } from "../contexts/ApiContext";

function AlertAge() {
  const [showAlert, setShowAlert] = useState(true);
  const { setAlertAge } = useData();

  const handleButtonClick = (choice) => {
    if (choice === "No") {
      setAlertAge(false);
    }
    setShowAlert(false);
  };

  return (
    <div className={`background ${showAlert ? "show" : "hide"}`}>
      <div className="bodyAlert">
        <h2 className="titleAlert">Welcome to CocktailAtom</h2>
        <div className="lineAlert"> </div>
        <p className="textAlert">
          You may not use this entire website if you are under the age of 18 or
          the age of majority in your jurisdiction. By clicking "Yes", you
          acknowledge and declare that you are 18 years of age or older.
        </p>
        <div className="buttonAlert">
          <button type="button" onClick={() => handleButtonClick("No")}>
            <span>No</span>
          </button>
          <button type="button" onClick={() => handleButtonClick("yes")}>
            <span>Yes</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AlertAge;
