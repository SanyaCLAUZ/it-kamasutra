import React from "react";
import { Link } from "react-router-dom";
import "./TestPage.css";
import StarContainer from "../../Components/Star/StarContainer";
import Accordion from "../../Components/Accordion/Accordion";

interface Props {}

const TestPage = (props: Props) => {
  return (
    <div>
      <div>
        <StarContainer />
      </div>
      <div>
        <Accordion titleValue={"Title"}  bodyValue={"Body"}/>
      </div>
      <button className="button-13" role="button">
        <Link to="/">Go to Home Page</Link>
      </button>
    </div>
  );
};

export default TestPage;
