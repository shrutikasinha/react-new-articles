import React, { useContext } from "react";
import ToggleContext from "../utils/ToggleContext";

const ToggleButton = () => {
  const { isToggled, setIsToggled } = useContext(ToggleContext);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={handleToggle} className="toggle-button">{isToggled ? "On" : "Off"}</button>
    </div>
  );
};

export default ToggleButton;
