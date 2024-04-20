import React, { useCallback, useRef } from 'react';
import imag from "../../src/images/desert.png";
import styled from "styled-components";
import { toPng } from 'html-to-image';

interface Props {}

type StyledButtonPropsType = {
  color: string;
  textColor: string;
};

const TaskPage = (props: Props) => {
  return (
      <Card >
        <img
          src={imag}
          width={"280px"}
          height={"170px"}/>
        <h3>Headline</h3>
        <div>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </div>
        <div>
          <StyledButton color={""} textColor={"white"}>
            See more
          </StyledButton>
          <StyledButton color={"white"} textColor={""}>
            Save
          </StyledButton>
        </div>
      </Card>
  );
};
export default TaskPage;



export const Card = styled.div`
  margin: 10% auto;
  width: 300px;
  height: 350px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px gray;
  align-items: left;

  h3 {
    font-size: 16px;
  }

  div {
    font-size: 12px;
    color: #abb3ba;
  }

  h3,
  div {
    padding: 10px 10px 10px 20px;
    margin: 0px;
    text-align: left;
  }

  img {
    width: 280px;
    height: 170px;
    padding: 10px;
  }
`;
export const StyledButton = styled.button<StyledButtonPropsType>`
  font-weight: bold;
  font-family: "inter", Courier, monospace;
  width: 86px;
  height: 30px;
  font-size: 10px;
  margin-right: 20px;
  border-radius: 5px;
  background-color: ${(props) => props.color || "#4e71fe"};
  color: ${(props) => props.textColor || "#white"};
  border-color: #4e71fe;
  text-align: center;
`;
