export function getFormula(name, { a, b, c, d }) {
  const formulas = {
    first: () => {
      return a * (b / c) + d;
    },
    second: () => {
      return a - b / c + d;
    },
  };

  return formulas[name]();
}
