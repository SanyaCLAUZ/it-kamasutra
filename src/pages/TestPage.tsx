import React from "react";
import { Link } from "react-router-dom";
import StarContainer from "../Components/Star/StarContainer";
import Accordion from "../Components/Accordion/Accordion";
import styled from "styled-components";
import GlobalStyledButton from "../StyledComponents/GlobalButton.styled";

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
      <GlobalStyledButton buttonText="Home Page" buttonLink="/"/>
    </Centura>
  );
};

export default TestPage;

export const Centura = styled.div`
  color: white;
  height: 1920px;
  padding-top: 5%;
  justify-content: center;
  align-items: center;
`;
