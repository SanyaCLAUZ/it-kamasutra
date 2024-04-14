import React from "react";
import { Link } from "react-router-dom";
import AccordionTitle from "../../Components/Accordion/AccordionTitle/AccordionTitle";
import AccordionList from "../../Components/Accordion/AccordionList/AccordionList";

type AccordionPropsType = {
  titleValue: string;
  bodyValue: string;
};

function Accordion(props: AccordionPropsType) {
  return (
    <>
      <AccordionTitle text={props.titleValue} />
      <AccordionList text={props.bodyValue} />
    </>
  );
}

export default Accordion;
