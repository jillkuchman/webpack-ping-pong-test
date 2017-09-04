class Compute {
  constructor() {}

  pingPong(number) {
    var output = [];
    for (var x = 1; x <= number; x++) {
      if (x % 15 === 0) {
        output.push("ping-pong");
      } else if (x % 3 === 0) {
        output.push("ping");
      } else if (x % 5 === 0) {
        output.push("pong");
      } else {
        output.push(x);
      }
    }
    return output;
  }
}

module.exports = Compute;
