let ceasarCipher = (str) => {
  let decoded = {
    G: "T",
    e: "r",
    n: "a",
    i: "v",
    u: "h",
    s: "f",

    w: "j",
    i: "v",
    t: "g",
    h: "u",
    o: "b",
    u: "h",
    t: "g",

    e: "r",
    d: "q",
    u: "h",
    c: "p",
    a: "n",
    t: "g",
    i: "v",
    o: "b",
    n: "a",

    i: "v",
    s: "f",

    l: "y",
    i: "v",
    k: "x",
    e: "r",

    s: "f",
    i: "v",
    l: "y",
    v: "i",
    e: "r",
    r: "e",

    i: "v",
    n: "a",

    t: "g",
    h: "u",
    e: "r",

    m: "z",
    i: "v",
    n: "a",
    e: "r",
  };
  let decipher = "";
  for (let i = 0; i < str.length; i++) {
    decipher += decoded[str[i]];
  }
  return decipher;
};
console.log(
  ceasarCipher("Genius without education is like silver in the mine")
);
