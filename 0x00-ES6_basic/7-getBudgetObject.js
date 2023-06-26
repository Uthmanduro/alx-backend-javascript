export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: parseInt(`${income}`, 10),
    gdp: parseInt(`${gdp}`, 10),
    capita: parseInt(`${capita}`, 10),
  };

  return budget;
}
