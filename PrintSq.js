function printSqr(aNum) {
  let myString = "";
  for (let i = 0; i < aNum; i++) {
    myString += "*";
  }
  for (let j = 0; j < aNum; j++) {
    console.log(myString);
  }
}
printSqr(12);
