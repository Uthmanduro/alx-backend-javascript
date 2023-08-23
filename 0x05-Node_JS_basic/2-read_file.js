#!/usr/bin/env node
// create a program executed through the cmd line

const fs = require('fs');

function countStudents(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(`Cannot load the database from ${filePath}`);
    } else {
      const students = data.split('\n');
      let count = 0;
      const csStudents = [];
      const sweStudents = [];
      for (const student of students) {
        if (student.includes('CS')) {
          csStudents.push(student.split(',')[0]);
        } else if (student.includes('SWE')) {
          sweStudents.push(student.split(',')[0]);
        }
      }
      count = csStudents.length + sweStudents.length;
      console.log(`Number of students: ${count}`);
      console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
      console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
    }
  });
}

module.exports = countStudents;
