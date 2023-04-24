import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <div className="bodyDiv1">
      <h1 className="h11">Skills speak louder </h1>
      <h1>than words</h1>
      <p className="bodyP">
        We help companies develop the strongest tech teams around.
      </p>
      <p className="bodyP">
        We help candidates sharpen their tech skills and pursue job
        opportunities.
      </p>
      <div className="btns">
        <button className="btn1">Sign up</button>
        <button className="btn">Request demo</button>
      </div>
      <p className="p1">
        Over 40% of developers worldwide and 3,000 companies use HackerRank
      </p>
    </div>
  );
};

export default Body;
