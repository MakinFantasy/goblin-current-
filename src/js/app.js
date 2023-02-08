// TODO: write code here

// comment this to pass build
const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

console.log("app.js included");

import Board from "./board";
import Goblin from "./goblin";
import GamePlay from "./gamePlay";

const board = new Board();
const char = new Goblin();
const gameplay = new GamePlay(board, char);

gameplay.init();