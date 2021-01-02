var leetspeak = (word) => {
  var dict = {
    A: "4",
    E: "3",
    G: "6",
    I: "1",
    O: "0",
    S: "5",
    T: "7",
    a: "4",
    e: "3",
    g: "6",
    i: "1",
    o: "0",
    s: "5",
    t: "7",
  };
  var strArr = word.split("");
  var result = strArr.map((element) => {
    if (element in dict) {
      return dict[element];
    } else {
      return element;
    }
  });
  return result.join("");
};
