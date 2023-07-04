export default function updateStudentGradeByCity(students, city, newGrades) {
  studentbycity = students.filter(arr => arr.location === city);

}
