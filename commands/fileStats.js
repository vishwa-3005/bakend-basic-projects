const fs = require("fs");

module.exports = (path) => {
  try {
    const stats = fs.statfsSync(path);
    console.log(stats);
  } catch (error) {
    console.log(error.message);
  }
};
