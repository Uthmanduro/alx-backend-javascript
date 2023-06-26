export default function createIteratorObject(report) {
  const newArray = [];
  const emp = report.allEmployees;

  /* eslint-disable guard-for-in */
  for (const item in emp) {
    newArray.push(...emp[item]);
  }
  /* eslint-disable guard-for-in */
  return newArray;
}
