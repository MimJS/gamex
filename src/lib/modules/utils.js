export const formatCoins = (value) => {
  return value.toLocaleString();
};

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
