#!/usr/bin/env node
// create a program executed through the cmd line

const { stdout, stdin } = process;

stdout.write('Welcome to Holberton School, what is your name?\n');

stdin.on('readable', () => {
  stdout.write(`Your name is: ${stdin.read()}`);
  process.exit();
});

process.on('exit', () => {
  stdout.write('This important software is now closing\n');
});
