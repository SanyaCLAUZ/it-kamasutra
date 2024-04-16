import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";

interface StarProps {
  filled: boolean;
  onHover: () => void;
  onClick: () => void;
}

const Star = ({ filled, onHover, onClick }: StarProps) => {
  return (
    <span className="star_container" onMouseEnter={onHover} onClick={onClick}>
      {filled ? <BsFillHeartFill /> : <FaRegStar />}
    </span>
  );
};

export default Star;
