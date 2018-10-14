class Robot {
	//your solution here
  constructor(){
    this.coordinates = [0,0]
    this.bearing = "north"
  }

  setCoordinates(coordinateA, coordinateB){
    this.coordinates =[coordinateA, coordinateB]
  }

  setBearing(bearing){
    const directions = ["north", "south", "east", "west"];
    if (directions.includes(bearing)){
      this.bearing = bearing
    }
    else {
      throw "Invalid Robot Bearing"
    }
  }

  place(argument){
    this.setCoordinates(argument.x, argument.y)
    this.setBearing(argument.direction)
  }

  turnRight(){
    switch (this.bearing) {
      case "north":
        this.setBearing("east")
        break;
      case "south":
        this.setBearing("west")
        break;
      case "west":
        this.setBearing("north")
        break;
      default:
      this.setBearing("south")
    }
  }

  turnLeft(){
    switch (this.bearing) {
      case "north":
        this.setBearing("west")
        break;
      case "south":
        this.setBearing("east")
        break;
      case "west":
        this.setBearing("south")
        break;
      default:
      this.setBearing("north")
    }
  }
  advance(){
    switch (this.bearing) {
      case "north":

        this.setCoordinates(this.coordinates[0], this.coordinates[1]+1)
        break;
      case "south":
        this.setCoordinates(this.coordinates[0], this.coordinates[1]-1)
        break;
      case "west":
        this.setCoordinates(this.coordinates[0]-1, this.coordinates[1])
        break;
      default:
      this.setCoordinates(this.coordinates[0]+1, this.coordinates[1])
    }
  }
  translateInstructions(instructions){
    instructions.split('').map(function(step){
      switch (step) {
        case "L":
          this.turnLeft();
          break;
        case "R":
          this.turnRight();
          break;
        default:
          this.advance();
      }
    }.bind(this))
  }

}
