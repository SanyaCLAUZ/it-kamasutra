import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import styled from "styled-components";
import imag from "../../src/images/desert.png";

interface Props {}

type StyledButtonPropsType = {
  color: string;
  textColor: string;
};

const TrashRoom = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <>
    <div ref={ref}>
      <Card >
        <img src={imag}/>
        <h3>Headline</h3>
        <div>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </div>
        <div>
          <StyledButton color={""} textColor={"white"}>
            See more
          </StyledButton>
          <StyledButton onClick={onButtonClick} color={"white"} textColor={""}>
            Save
          </StyledButton>
        </div>
      </Card>
      <Card ></Card>
      </div>
    </>
  );
};

export default TrashRoom;

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
