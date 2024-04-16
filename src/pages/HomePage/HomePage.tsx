import React from "react";
import { Link } from "react-router-dom";
import StyledButton from "../../Components/StyledComponents/StyledButton";
import Navbar from "../../Components/Navbar/Navbar";
import styled from "styled-components";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <>
      <body>
        <Box>
        <StyledButton>
          <Link to="TestPage">Go to Test Page</Link>
        </StyledButton>
        </Box>
      </body>
    </>
  );
};
export default HomePage;

const Box = styled.div`
  height: 1000px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
