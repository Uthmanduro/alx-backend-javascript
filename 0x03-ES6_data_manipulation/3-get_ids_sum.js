export default function getStudentIdsSum(student) {
  return student.reduce((acc, obj) => acc + obj.id, 0);
}
