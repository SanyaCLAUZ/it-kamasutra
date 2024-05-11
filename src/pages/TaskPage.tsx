import { Link } from "react-router-dom";
import CardType from "../Components/Card/Card";
import GlobalStyledButton from "../StyledComponents/GlobalButton.styled";

interface Props {}

const TaskPage = (props: Props) => {
  return (
    <>
      <CardType
        titleValue={"Headline"}
        bodyValue={
          "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestieornare in venen."
        }
      />
      <GlobalStyledButton buttonText="Home Page" buttonLink="/"/>
    </>
  );
};
export default TaskPage;
