#!/usr/bin/env node
// create a function named displayMessage

function displayMessage(argument) {
  process.stdout.write(`${argument}\n`);
}

module.exports = displayMessage;
