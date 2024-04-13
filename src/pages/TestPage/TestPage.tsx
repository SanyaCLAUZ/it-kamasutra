import React from "react";
import { Link } from "react-router-dom";
import "./TestPage.css";

interface Props {}

const TestPage = (props: Props) => {
  return (
    <div>
      <h1>TestPage</h1>
      <button className="button-13" role="button">
        <Link to="/">Go to Home Page</Link>
      </button>
    </div>
  );
};

export default TestPage;
