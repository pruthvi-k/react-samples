import React from "react";
import ToolTip from "./ToolTip";
function ProgressBar({ status }) {
  return (
    <>
      <ToolTip></ToolTip>
      <div className="progress-bar">
        <div className="progress-status" style={{ width: `${status}%` }}></div>
      </div>
    </>
  );
}

export default ProgressBar;
