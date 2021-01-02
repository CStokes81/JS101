var good = 0.2;
var fair = 0.15;
var bad = 0.1;

function tipAmount(Bill, serviceLevel) {
  switch (serviceLevel) {
    case "good":
      alert(Bill * ".20");
      break;
    case "fair":
      alert(Bill * ".15");
      break;
    case "bad":
      alert(Bill * ".10");
      break;
    default:
  }
}

console.log(good);
