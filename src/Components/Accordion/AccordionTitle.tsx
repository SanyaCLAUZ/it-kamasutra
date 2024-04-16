import React from "react";
import { Link } from "react-router-dom";

type AccordionTitlePropsType = {
  text: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (<h1>{props.text}</h1>)
}

export default AccordionTitle;
