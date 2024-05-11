import { Link } from "react-router-dom";
import { Box } from "../StyledComponents/Box.styled";
import GlobalStyledButton from "../StyledComponents/GlobalButton.styled";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <>
      <Box>
        <GlobalStyledButton buttonText="TestPage" buttonLink="TestPage"/>
        <GlobalStyledButton buttonText="Task Page" buttonLink="TaskPage"/>
        <GlobalStyledButton buttonText="Contact Us" buttonLink="Contact"/>
      </Box>
    </>
  );
};
export default HomePage;
