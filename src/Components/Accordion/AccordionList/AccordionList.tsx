import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type AccordionTitlePropsType = {
  text: [string, string, string];
};

function AccordionList(props: AccordionTitlePropsType) {
  return (
    <List>
      <ul>
        <li>{props.text[0]}</li>
        <li>{props.text[1]}</li>
        <li>{props.text[2]}</li>
      </ul>
    </List>
  );
}

export default AccordionList;

const List = styled.nav`
  ul {
    list-style: none;
    padding: 0px;
    border: solid #474747 1px;
    border-radius: 11px;
  }
  li {
    padding: 10px 0px;
    &:hover {
      background-color: #535353;
      border-radius: 10px;
    }
    &:active {
      background-color: #535353;
    }
  }
`;
