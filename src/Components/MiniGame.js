import React from "react";
import Character from "./Character";

function MiniGame() {
  return (
    <>
      <div className="main-stage">
        <div className="ground"></div>
        <div className="block1"></div>
        <div className="block2"></div>
        <div className="block3"></div>
      </div>
      <Character />
    </>
  );
};

export default MiniGame;