import React from "react";
import { Link } from "react-router-dom";
import imag from "../../images/desert.png";
import StyledButton from "../../StyledComponents/StyledButton";
import styled from "styled-components";

type CardPropsTypes = {
  titleValue: string;
  bodyValue: string;
};

function CardType(props: CardPropsTypes) {
  return (
    <Card>
      <img src={imag} />
      <h3> {props.titleValue}</h3>
      <div> {props.bodyValue}</div>
      <div>
        <StyledButton primary={true}>See more</StyledButton>
        <StyledButton>Save</StyledButton>
      </div>
    </Card>
  );
}

export default CardType;

export const Card = styled.div`
  margin: 10% auto 20px auto;
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
