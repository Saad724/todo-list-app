export const cardColors = [
  "#eec84a",
  "#b0e740",
  "#40e7af",
  "#40c9e7",
  "#4084e7",
  "#5740e7",
  "#b740e7",
  "#e740c1",
  "#e74070",
  "#e77a40",
];

export const getRandomColor = () => {
  const randomNumber = Math.floor(Math.random() * cardColors.length);
  return cardColors[randomNumber];
};
