import React, { useEffect, useState } from "react";
import SquareComponent from "./SquareComponent";
import { Row, Col, Container, Button } from "react-bootstrap";

const BoardComponent = () => {
  // setting board and setBoard setter in state
  const [board, setBoard] = useState(() => {
    // creating an array of 8, with null values by default, and then mapping over it, and setting white for all.
    const newBoard = Array(8)
      .fill(null)
      .map(() => Array(8).fill("white"));

    //   looping over new board, and taking the i and j, if sum is divisible by 2, then setting black else white.
    for (let i = 0; i < newBoard.length; i++) {
      for (let j = 0; j < newBoard[i].length; j++) {
        if ((i + j) % 2 === 0) {
          newBoard[i][j] = "black";
        } else {
          newBoard[i][j] = "white";
        }
      }
    }
    // updaing board
    return newBoard;
  });

  return (
    // container alinged to center
    <Container
      style={{ display: "grid", placeItems: "center", marginTop: "6rem" }}
    >
      {board.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {row.map((col, colIndex) => (
            <Col
              key={`${rowIndex}-${colIndex}`}
              md={1}
              style={{ width: "4rem" }}
            >
              {/* Square component, sending color, row index, col index, board, and setter */}
              <SquareComponent
                color={col}
                row={rowIndex}
                col={colIndex}
                board={board}
                setBoard={setBoard}
              />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default BoardComponent;
