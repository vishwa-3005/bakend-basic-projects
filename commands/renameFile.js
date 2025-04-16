const fs = require("fs");

module.exports = (oldPath, newPath) => {
  try {
    fs.renameSync(oldPath, newPath);
    console.log("File renamed succesfully !!");
  } catch (error) {
    console.log(error.message);
  }
};
