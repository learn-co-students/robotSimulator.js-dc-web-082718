const directions = ["north", "south", "east", "west"];

class Robot {
	constructor(coordinates = [0,0], bearing = 'north') {
    this.coordinates = coordinates;
    this.bearing = bearing;
  }

  setCoordinates(x, y) {
    return this.coordinates = [x,y];
  }

  setBearing(direction) {
    if(directions.includes(direction)) {
      return this.bearing = direction;
    } else {
      throw new Error("Invalid Robot Bearing");
    }
  }

  place(location) {
    this.setCoordinates(location.x, location.y);
    this.setBearing(location.direction);
  }

  turnRight() {
    switch(this.bearing) {
      case 'north':
        this.bearing = 'east';
        break;
      case 'east':
        this.bearing = 'south';
        break;
      case 'south':
        this.bearing = 'west';
        break;
      case 'west':
        this.bearing = 'north';
        break;
    }
  }

  turnLeft() {
    switch(this.bearing) {
      case 'north':
        this.bearing = 'west';
        break;
      case 'east':
        this.bearing = 'north';
        break;
      case 'south':
        this.bearing = 'east';
        break;
      case 'west':
        this.bearing = 'south';
        break;
    }
  }

  advance() {
    switch(this.bearing) {
      case 'north':
        this.coordinates[1]++;
        break;
      case 'east':
        this.coordinates[0]++;
        break;
      case 'south':
        this.coordinates[1]--;
        break;
      case 'west':
        this.coordinates[0]--;
        break;
    }
  }

  readInstruction(letter) {
    switch(letter) {
      case 'L':
        this.turnLeft();
        break;
      case 'R':
        this.turnRight();
        break;
      case 'A':
        this.advance();
        break;
    }
  }

  translateInstructions(instructions) {
    let arr = instructions.split("");
    arr.forEach(function(i) {
      this.readInstruction(i);
    }.bind(this))
  }

}
