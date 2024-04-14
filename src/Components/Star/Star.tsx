import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

interface StarProps {
  filled: boolean;
  onHover: () => void;
  onClick: () => void;
}

const Star = ({ filled, onHover, onClick }: StarProps) => {
  return (
    <span className="star_container" onMouseEnter={onHover} onClick={onClick}>
      {filled ? <FaStar /> : <FaRegStar />}
    </span>
  );
};

export default Star;
