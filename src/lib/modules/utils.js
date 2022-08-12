export const formatCoins = (value) => {
  return value.toLocaleString();
};

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const isNumeric = (n) => {
  console.log(`q`, n);
  return !isNaN(parseFloat(n)) && isFinite(n);
};

export const formatNumber = (number, decimals = 0, separator = " ") => {
  number = (number + "").replace(/[^0-9+\-Ee]/g, "");
  let n = !isFinite(number) ? 0 : number,
    s = "";
  s = "" + n;
  console.log(`TEST`, s);

  return s;
};
