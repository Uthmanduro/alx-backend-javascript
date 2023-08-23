const fs = require('fs');
const express = require('express');

const filePath = process.argv[2];

const port = 1245;
const host = '127.0.0.1';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  function countStudents(filePath) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        } else {
          const splitData = data.trim().split('\r\n');

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
          res.write(`Number of students: ${splitData.length}\n`);
          for (const fields in studentData) {
            if (fields) {
              res.write(`Number of students in ${fields}: ${studentData[fields].length}. List: ${studentData[fields].join(', ')}\n`);
            }
          }
          resolve();
        }
      });
    });
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  await countStudents(filePath);
  res.end();
});

app.listen(port, host);
