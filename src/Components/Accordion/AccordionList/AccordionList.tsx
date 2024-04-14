import React from "react";
import { Link } from "react-router-dom";
import "./AccordionList.css";

type AccordionTitlePropsType = {
  text: [string, string, string];
};

function AccordionList(props: AccordionTitlePropsType) {
  return (
    <ul>
      <li>{props.text[0]}</li>
      <li>{props.text[1]}</li>
      <li>{props.text[2]}</li>
    </ul>
  );
}

export default AccordionList;
