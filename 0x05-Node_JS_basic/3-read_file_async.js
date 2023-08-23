#!/usr/bin/env node
// read the database asynchronously
const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
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
        resolve();
      }
    });
  });
}

module.exports = countStudents;
