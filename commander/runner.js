'use strict';

//this function allows us to write command sequences in an array format for clean readability

const exec = require("child_process").exec;
const async = require('async');
const prompt = require('prompt');

module.exports = runCommands;

/* EXAMPLE INPUT *
const commandSequences = {
  SEQUENCE_TO_RUN: {
    warning: "Some string to warn the user of any negative consequences of the following sequence.",
    commands: [
      "ls",
      "clear",
      "ls -ll"
    ]
  }
};
*/
function runCommands(commandSubset, commandSequences, introString) {
  console.log(introString);
  let promptMessage = "\n" + commandSequences["" + commandSubset.toUpperCase()].warning + " \nAre your sure you would like to continue? (Y/N)";
  prompt.get([promptMessage], (err, result) => {
    if (result[promptMessage].toUpperCase() === "Y") {
      setTimeout(() => {
        let commands = commandSequences["" + commandSubset.toUpperCase()].commands;
        asyncCommands(commands, (err, stdout) => {
          if (err) {
            console.log(err, stdout);
          } else {
            console.log("Success");
          }
        })
      }, 1000)
    }
  })
}

function asyncCommands(commands, callback) {
  let asyncFunctions = commands.map((command) => {
    return (
      (callback) => {
        exec(command, (err, stdoud, stdin) => {
          if (err) {
            console.log(err, stdoud);
          } else {
            callback(false, null)
          }
        })
      }
    )
  });

  async.series(asyncFunctions, (err) => {
    if (!err) {
      callback(false)
    } else {
      callback(err)
    }
  });
}
