import React from "react";
import { Link } from "react-router-dom";
import StyledButton from "../Components/StyledComponents/StyledButton";
import { Box } from "../Components/StyledComponents/Box.styled";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <>
      <Box>
        <StyledButton>
          <Link to="TestPage">Go to Test Page</Link>
        </StyledButton>
        <StyledButton>
          <Link to="TaskPage">Go to Task Page</Link>
          </StyledButton>
      </Box>
    </>
  );
};
export default HomePage;
