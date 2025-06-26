import { useState } from "react";
import "./toggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "on" : "off";
  const backgroundColor = { backgroundColor: isOn ? "green" : "" };

  return (
    <div
      className="toggle-switch"
      style={backgroundColor}
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${checkIsOn}`}>
        <span className={`switch-state `}>{checkIsOn}</span>
      </div>
    </div>
  );
};
