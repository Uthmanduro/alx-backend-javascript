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
  const splitData = data.trim().split('\n');

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
}

module.exports = countStudents;
