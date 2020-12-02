module.exports = function (number) {
  let a = 0;
  for (let i = 0; i <= number; i++) {
    a = i;
  }

  if (a === number) {
    return "Processamento pesado finalizado";
  }
};
