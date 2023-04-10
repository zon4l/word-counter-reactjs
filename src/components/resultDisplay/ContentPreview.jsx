import React from "react";

const ContentPreview = ({ textContent }) => {
  return (
    <>
      <div className="content-container mt-30">{textContent}</div>
      <div className="mt-16 d-flex justify-around align-center">
        <div className="d-flex align-center">
          <div className="color-square bg-very-high"></div>
          <p className="ml-10">&gt; 250 times</p>
        </div>
        <div className="d-flex align-center">
          <div className="color-square bg-high"></div>
          <p className="ml-10">&gt; 200 times</p>
        </div>
        <div className="d-flex align-center">
          <div className="color-square bg-moderate"></div>
          <p className="ml-10">&gt; 100 times</p>
        </div>
        <div className="d-flex align-center">
          <div className="color-square bg-repeated"></div>
          <p className="ml-10">&gt; 50 times</p>
        </div>
        <div className="d-flex align-center">
          <div className="color-square bg-base"></div>
          <p className="ml-10">&lt; 50 times</p>
        </div>
      </div>
    </>
  );
};

export default ContentPreview;
