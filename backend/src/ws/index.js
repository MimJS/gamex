const dice = require("./dice");

module.exports = (wsx) => {
  const diceWSX = wsx.route("/dice");
  dice(diceWSX);
};
