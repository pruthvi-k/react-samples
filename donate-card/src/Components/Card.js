import React from "react";
import ProgressBar from "./ProgressBar";

function Card({ progress, daysLeft, donors, amount }) {
  return (
    <>
      <ProgressBar status={progress}></ProgressBar>
      <div className="card">
        <p>
          <span className="highlight-text">Only {daysLeft} days left </span>to
          fund this project
        </p>
        <p>Joint the {donors} other donars</p>
        <div className="give-now">
          <div className="why-give">
            <span className="currency">$</span>
            <input type="text" value={amount}></input>
          </div>
          <div>
            <input type="button"></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
