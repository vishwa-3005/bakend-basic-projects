const fs = require("fs");

module.exports = (path, content) => {
  try {
    fs.appendFileSync(path, content);
    console.log("File appended succesfully");
  } catch (error) {
    console.log(error.message);
  }
};
