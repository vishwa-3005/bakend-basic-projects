const fs = require("fs");

module.exports = (path) => {
  try {
    const data = fs.readFileSync(path, "utf8");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
