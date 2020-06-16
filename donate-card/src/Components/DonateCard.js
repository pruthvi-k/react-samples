import React from "react";
import Card from "./Card";

function DonateCard({ progress, daysLeft, donors, amount }) {
  return (
    <div className="donate-card">
      <Card
        progress={progress}
        daysLeft={daysLeft}
        donors={donors}
        amount={amount}
      ></Card>
    </div>
  );
}

export default DonateCard;
