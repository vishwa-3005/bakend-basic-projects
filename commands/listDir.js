const fs = require("fs");

module.exports = (path) => {
  try {
    const files = fs.readdirSync(path);
    files.forEach((file) => {
      console.log(file);
    });
  } catch (error) {
    console.log(error.message);
  }
};
