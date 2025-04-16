const fs = require("fs");
module.exports = (path, content) => {
  try {
    fs.writeFileSync(path, content, "utf8");
    console.log("File written succesfully !!");
  } catch (error) {
    console.log(error.message);
  }
};
