const fs = require("fs");

module.exports = (path) => {
  try {
    fs.mkdirSync(path, { recursive: true });
    console.log("Directory created succesfully !!");
  } catch (error) {
    console.log("Error creating directory.!");
  }
};
