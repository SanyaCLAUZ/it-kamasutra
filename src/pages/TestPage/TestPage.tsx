import React from "react";
import { Link } from "react-router-dom";
import "./TestPage.css";
import StarContainer from "../../Components/Star/StarContainer";
import Accordion from "../../Components/Accordion/Accordion";
import styled from "styled-components";

interface Props {}

const TestPage = (props: Props) => {
  return (
    <div>
      <div>
        <StarContainer />
      </div>
      <div>
        <Accordion
          titleValue={"Title"}
          bodyValue={["Body", "Body1", "Body2"]}
        />
      </div>
      <StyledButton>
        <Link to="/">Go to Home Page</Link>
      </StyledButton>
    </div>
  );
};

export default TestPage;

const StyledButton = styled.button`
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
`
