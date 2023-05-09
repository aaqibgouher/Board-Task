import React from "react";
import { Button } from "react-bootstrap";

// component definition, taking props in object
const SquareComponent = ({ color, row, col, board, setBoard }) => {
  // creating button style
  const buttonStyle = {
    backgroundColor: `${color}`,
  };

  //   on click of change color
  const changeColor = () => {
    const newBoard = [...board]; // create a copy of the board array
    newBoard[row][col] = "red"; // update the copy
    setBoard(newBoard); // update the state in the parent component
  };

  return (
    // Each button with class and style
    <Button
      className="square-class"
      style={buttonStyle}
      onClick={changeColor}
    ></Button>
  );
};

export default SquareComponent;
