const fs = require("fs");

module.exports = (path) => {
  try {
    fs.rmSync(path, { recursive: true });
    console.log("Directory removed succesfully");
  } catch (error) {
    console.log(error.message);
  }
};
