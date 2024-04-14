import React from "react";
import { Link } from "react-router-dom";
import "./AccordionList.css";

type AccordionTitlePropsType = {
  text: string;
};

function AccordionList(props: AccordionTitlePropsType) {
  return (
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  );
}

export default AccordionList;
