#!/usr/bin/env node
// create a program executed through the cmd line

const fs = require('fs');

function countStudents(filePath) {
  let data;
  try {
    data = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  const students = data.split('\r\n');

  students.shift();
  const courses = new Map();
  students.forEach((student) => {
    const studentData = student.split(',');
    const firstName = studentData[0];
    const field = studentData[3];
    if (courses.has(field)) {
      courses.get(field).students.push(firstName);
      courses.get(field).count += 1;
    } else {
      courses.set(field, { students: [firstName], count: 1 });
    }
  });

  console.log(`Number of students: ${students.length}`);

  courses.forEach((courseData, course) => {
    console.log(
      `Number of students in ${course}: ${
        courseData.count
      }. List: ${courseData.students.join(', ')}`,
    );
  });
}

module.exports = countStudents;
