import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import StyledButton from "../../Components/StyledComponents/StyledButton";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <div>
      <StyledButton>
        <Link to="TestPage">Go to Test Page</Link>
      </StyledButton>
    </div>
  );
};
export default HomePage;
