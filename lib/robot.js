const directions = ["north", "east", "south", "west"];

class Robot {

	constructor(){
    this.coordinates = [0, 0];
    this.bearing = "north";
  }
  setCoordinates(x, y){
    this.coordinates = [x, y];
    return this.coordinates;
  }
  setBearing(aDirection){
    debugger
    if (directions.includes(aDirection)){
      this.bearing = aDirection;
      return this.bearing;
    } else {
      throw "Invalid Robot Bearing"
    }
  }
  place({x: xVar, y: yVar, direction: dVar}){
    this.coordinates = [xVar, yVar];
    this.bearing = dVar;
  }
  turnRight(){

    switch(this.bearing) {
      case "north":
        this.bearing = "east"
        break;
      case "east":
        this.bearing = "south"
        break;
      case "south":
        this.bearing = "west"
        break;
      case "west":
        this.bearing = "north";
    }
  }
  turnLeft(){
    switch(this.bearing){
      case "north":
        this.bearing = "west"
        break;
      case "west":
        this.bearing = "south"
        break;
      case "south":
        this.bearing = "east"
        break;
      case "east":
        this.bearing = "north";
    }
  }
  advance(){
    switch(this.bearing){
      case "north":
        this.coordinates[1]+=1;
        break;
      case "south":
        this.coordinates[1]-=1;
        break;
      case "east":
        this.coordinates[0]+=1;
        break;
      case "west":
        this.coordinates[0]-=1;
    }


  }
  translateInstructions(command){
    for (const key of command){
      switch(key){
          case "L":
            this.turnLeft();
            break;
          case "R":
            this.turnRight();
            break;
          case "A":
            this.advance();
            break;
        }
    }
  }
}
