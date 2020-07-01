'use strict';

const Transition = require('./transition');

class Tile{
  gem = null;
  transitions = [];

  constructor(grid, x, y){
    this.grid = grid;
    this.x = x;
    this.y = y;
  }

  createTransition(type, x1, y1, x2, y2, s1, s2, start, end){
    this.addTransition(new Transition(this, type, x1, y1, x2, y2, s1, s2, start, end));
  }

  addTransition(transition){
    const {grid, transitions} = this;

    if(transitions.length === 0)
      grid.addTransition(transition);

    transitions.push(transition);
  }

  removeTransition(){
    const {grid, transitions} = this;

    grid.removeTransition(transitions.shift());

    if(transitions.length !== 0)
      grid.addTransition(transitions[0]);
  }
}

module.exports = Tile;