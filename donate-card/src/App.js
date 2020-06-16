import React, { useState } from "react";
import "./App.css";
import DonateCard from "./Components/DonateCard";

function App() {
  let [cardData, setCardData] = useState({
    content: "some content",
    progress: 60,
    daysLeft: 3,
    donors: 42,
    amount: 50,
  });

  return (
    <div className="App">
      <DonateCard
        content={cardData.content}
        progress={cardData.progress}
        daysLeft={cardData.daysLeft}
        donors={cardData.donors}
        amount={cardData.amount}
      ></DonateCard>
    </div>
  );
}

export default App;
