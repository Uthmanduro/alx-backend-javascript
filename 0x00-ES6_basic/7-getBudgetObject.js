export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: parseInt(`${income}`),
    gdp: parseInt(`${gdp}`),
    capita: parseInt(`${capita}`),
  };

  return budget;
}
