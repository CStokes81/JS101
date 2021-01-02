function printbox(width, height) {
  for (var row = 1; row <= height; row++) {
    //this is for creating the rows
    var rowString = "";
    for (var column = 1; column <= width; column++) {
      //this is building out the columns
      if (row == 1 || row == height) {
        //this if stmt will look to see if the current row is either the top or bottom row and will continue adding stars until the row reached the entered "height" to create a full line
        rowString += "*";
      } else {
        if (column == 1 || column == width) {
          rowString += "*";
        } else {
          rowString += " ";
        }
      }
    }
    console.log(rowString);
  }
}
printbox(10, 5);
