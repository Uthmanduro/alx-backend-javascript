export default function createEmployeesObject(departmentName, employees) {
  const empobject = { [departmentName]: employees };

  return empobject;
}
