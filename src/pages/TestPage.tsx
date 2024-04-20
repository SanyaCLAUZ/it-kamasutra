import React from "react";
import { Link } from "react-router-dom";
import StarContainer from "../Components/Star/StarContainer";
import Accordion from "../Components/Accordion/Accordion";
import StyledButton from "../Components/StyledComponents/StyledButton";
import styled from "styled-components";

interface Props {}

const TestPage = (props: Props) => {
  return (
    <Centura>
      <div>
        <StarContainer />
      </div>
      <div>
        <Accordion
          titleValue={"Irynka"}
          bodyValue={["Cute", "Beautiful", "Pretty"]}
        />
      </div>
      <StyledButton>
        <Link to="/">Go to Home Page</Link>
      </StyledButton>
    </Centura>
  );
};

export default TestPage;

export const Centura = styled.div`
  height: 1920px;
  padding-top: 5%;
  justify-content: center;
  align-items: center;
`;
