class Home {
  constructor(length, breath, height) {
    this.length = length;
    this.height = height;
    this.breath = breath;
  }
  areaOfHome() {
    return length * this.breath * this.height;
  }
  colorOfWalls() {
    const wallColors = ["red", "yello", "black", "teal"];
  }
}

class Room extends Home {
  constructor(length, breath, height, catagory) {
    super(length, breath, height);

    this.catagory = catagory;
  }

  catagoryType() {
    console.log("Enter catagory: ");
  }
}
