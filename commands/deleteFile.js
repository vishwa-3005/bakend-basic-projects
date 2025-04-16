const fs = require("fs");

module.exports = (path) => {
  try {
    fs.unlinkSync(path);
    console.log("File deleted succesfully !!");
  } catch (Error) {
    console.log("Error : ", Error.message);
  }
};
