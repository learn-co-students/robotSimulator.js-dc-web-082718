class Robot {
	constructor(){
    this.coordinates = [0,0]
    this.bearing = "north"
  }


  setCoordinates(x, y){
    this.coordinates[0] = x
    this.coordinates[1] = y
  }

  setBearing(direction){
    const directions = ["north", "east", "south", "west"]
    if (directions.includes(direction)){
      this.bearing = direction
    } else {
      throw "Invalid Robot Bearing"
    }
  }

  place(object){
      this.setCoordinates(object.x, object.y)
      this.setBearing(object.direction)
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
        this.bearing = "north"
        break;
      default:
        break;
    }
  }

  turnLeft(){
    switch(this.bearing) {
      case "north":
        this.bearing = "west"
        break;
      case "east":
        this.bearing = "north"
        break;
      case "south":
        this.bearing = "east"
        break;
      case "west":
        this.bearing = "south"
        break;
      default:
        break;
    }
  }

  advance(){
    let coordinate = this.coordinates
    switch(this.bearing) {
      case "north":
        coordinate[1]++
        break;
      case "south":
        coordinate[1]--
        break;
      case "east":
        coordinate[0]++
        break;
      case "west":
        coordinate[0]--
        break;
      default:
        break;
    }
  }

  translateInstructions(instruction){
    let arr = instruction.split("")
    for (const letter of arr){
      if (letter === "L"){
        this.turnLeft()
      }
      else if (letter === "R"){
        this.turnRight()
      }
      else if (letter === "A"){
        this.advance()
      } else {
        continue
      }
    }
  }


}
