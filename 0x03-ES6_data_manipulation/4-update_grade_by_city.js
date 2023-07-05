export default function updateStudentGradeByCity(students, city, newGrades) {
  /* eslint-disable no-param-reassign */
  const studentbycity = students.filter((newarr) => newarr.location === city);
  studentbycity.map((obj) => {
    const studentgrade = newGrades.filter((arr) => arr.studentId === obj.id);
    if (studentgrade.length === 0) {
      obj.grade = 'N/A';
    } else {
      obj.grade = studentgrade[0].grade;
    }
    return obj;
  });
  return studentbycity;
}
