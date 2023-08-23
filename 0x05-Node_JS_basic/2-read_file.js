#!/usr/bin/env node
// create a program executed through the cmd line

const fs = require('fs');

function countStudents(filePath) {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      throw new Error('Cannot load the database');
      return;
    }
    const splitData = data.split('\r\n');
    const studentData = {
      cs_count: 0,
      swe_count: 0,
      cs_students: [],
      swe_students: [],
    };
    const { length } = splitData;
    for (let rows = 1; rows < length; rows += 1) {
      const student = splitData[rows].split(',');
      if (student[3] === 'CS') {
        studentData.cs_count += 1;
        studentData.cs_students.push(student[0]);
      } else if (student[3] === 'SWE') {
        studentData.swe_count += 1;
        studentData.swe_students.push(student[0]);
      }
    }
    console.log(`Number of students: ${splitData.length - 1}`);
    console.log(`Number of students in CS: ${studentData.cs_count}. List: ${studentData.cs_students.join(', ')}`);
    console.log(`Number of students in SWE: ${studentData.swe_count}. List: ${studentData.swe_students.join(', ')}`);
  });
}

module.exports = countStudents;
