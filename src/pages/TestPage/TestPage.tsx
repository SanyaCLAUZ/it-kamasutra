import React from "react";
import { Link } from "react-router-dom";
import StarContainer from "../../Components/Star/StarContainer";
import Accordion from "../../Components/Accordion/Accordion";
import StyledButton from "../../Components/StyledComponents/StyledButton";

interface Props {}

const TestPage = (props: Props) => {
  return (
    <div>
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
    </div>
  );
};

export default TestPage;
