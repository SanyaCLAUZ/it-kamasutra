import React, { useState } from "react";
import Star from "./Star"; // Import the Star component

interface StarProps {
    filled: boolean;
    onHover: () => void;
    onClick: () => void;
  }
  
const StarContainer = () => {
  const [filledStars, setFilledStars] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [pressedStars, setPressedStars] = useState(0);

  const handleStarHover = (index: number) => {
    const updatedFilledStars = filledStars.map((_, i) => i <= index);
    setFilledStars(updatedFilledStars);
  };

  const handleStarClick = () => {
    const pressed = filledStars.filter(Boolean).length;
    setPressedStars(pressed);
    alert(`Pressed stars: ${pressed}`);
  };

  const handleMouseLeave = () => {
    setFilledStars([false, false, false, false, false]);
  };

  return (
    <div className="starContainer" onMouseLeave={handleMouseLeave}>
      {filledStars.map((filled, index) => (
        <Star
          key={index}
          filled={filled}
          onHover={() => handleStarHover(index)}
          onClick={handleStarClick}
        />
      ))}
    </div>
  );
};

export default StarContainer;