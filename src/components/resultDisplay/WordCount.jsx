import React from "react";

const WordCount = ({ sortedCount }) => {
  const decideColor = () => {
    if (sortedCount[1] > 250) return "color-very-high";
    else if (sortedCount[1] > 200) return "color-high";
    else if (sortedCount[1] > 100) return "color-moderate";
    else if (sortedCount[1] > 50) return "color-repeated";
  };

  return (
    <>
      <tr className={decideColor()}>
        <td>{sortedCount[0]}</td>
        <td>{sortedCount[1]}</td>
      </tr>
    </>
  );
};

export default WordCount;
