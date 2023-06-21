import React, { useState } from "react";

function App() {
  const [topOffset, setTopOffset] = useState(0);
  const [leftOffset, setLeftOffset] = useState(-250);

  const moveUp = () => {
    setTopOffset((prevOffSet) => prevOffSet - 50);
  };

  const moveLeft = () => {
    if (leftOffset > -250) {
      setLeftOffset((prevOffSet) => prevOffSet - 50);
    }
  };

  const moveRight = () => {
    if (leftOffset < 200) {
      setLeftOffset((prevOffSet) => prevOffSet + 50);
    }
  };
  const moveDown = () => {
    if (topOffset >= 0) {
      setTopOffset((prevOffSet) => prevOffSet + 50);
    }
  };
  return (
    <>
      <div className="container_main">
        <button className="up" onClick={moveUp} disabled={topOffset <= 0}>
          up
        </button>

        <div className="midContainer">
          <button
            className="left"
            onClick={moveLeft}
            disabled={leftOffset <= -250}
          >
            left
          </button>
          <div
            className="box"
            style={{
              position: "relative",
              top: `${topOffset}px`,
              left: `${leftOffset}px`,
            }}
          ></div>
          <button
            className="right"
            onClick={moveRight}
            disabled={leftOffset >= 200}
          >
            right
          </button>
        </div>
        <button className="down" onClick={moveDown} disabled={topOffset >= 450}>
          down
        </button>
      </div>
    </>
  );
}

export default App;
