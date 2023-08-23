#!/usr/bin/env node
// create a program executed through the cmd line

const fs = require('fs');

function countStudents(filePath) {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      throw new Error('Cannot load the database');
    }
    const splitData = data.split('\r\n');
    splitData.shift();
    const studentData = {};
    for (let student of splitData) {
      student = student.split(',');
      if (student[3] in studentData) {
        studentData[student[3]].push(student[0]);
      } else {
        studentData[student[3]] = [];
        studentData[student[3]].push(student[0]);
      }
    }
    console.log(`Number of students: ${splitData.length}`);
    for (const fields in studentData) {
      if (fields) {
        console.log(`Number of students in ${fields}: ${studentData[fields].length}. List: ${studentData[fields].join(', ')}`);
      }
    }
  });
}

module.exports = countStudents;
