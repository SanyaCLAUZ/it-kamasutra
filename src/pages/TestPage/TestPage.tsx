import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TestPage.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

interface Props {}

const TestPage = (props: Props) => {
  return (
    <div>
      <div>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>

      <button className="button-13" role="button">
        <Link to="/">Go to Home Page</Link>
      </button>
    </div>
  );
};

function Star() {
  const [hidden, setHidden] = useState(false);
  return (
    <span
      className="star_container"
      onMouseEnter={() => setHidden(true)}
      onMouseLeave={() => setHidden(false)}
    >
      {hidden ? <FaStar /> : <FaRegStar /> }
    </span>
  );
}

export default TestPage;
