const createDir = require("./commands/createDir");
const writeFile = require("./commands/writeFile");
const readFile = require("./commands/readFile");
const listDir = require("./commands/listDir");
const renameFile = require("./commands/renameFile");
const fileStats = require("./commands/fileStats");
const deleteFile = require("./commands/deleteFile");
const appendFile = require("./commands/appendFile");
const searchFile = require("./commands/searchFile");
const removeDir = require("./commands/removeDir");
const fs = require("fs");

const [, , cmd, ...args] = process.argv;

switch (cmd) {
  case "mkdir":
    createDir(args[0]);
    break;
  case "write":
    writeFile(args[0], args.slice(1).join(" "));
    break;
  case "read":
    readFile(args[0]);
    break;
  case "append":
    appendFile(args[0], args.slice(1).join(" "));
    break;
  case "list":
    listDir(args[0]);
    break;
  case "rename":
    renameFile(args[0], args[1]);
    break;
  case "delete":
    deleteFile(args[0]);
    break;
  case "search":
    searchFile(args[0]);
    break;
  case "stats":
    fileStats(args[0]);
    break;
  case "remdir":
    removeDir(args[0]);
    break;
  default:
    console.log("Command not found!!");
}
