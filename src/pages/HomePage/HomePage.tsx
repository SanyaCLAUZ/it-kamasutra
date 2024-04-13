import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <div>
      <button className="button-13" role="button">
        <Link to="TestPage">Go to Test Page</Link>
      </button>
    </div>
  );
};
export default HomePage;
