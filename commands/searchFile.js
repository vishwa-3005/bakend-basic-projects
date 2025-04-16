const fs = require("fs");
const path = require("path");

function search(directory, target) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      search(fullPath, target);
    } else if (file.includes(target)) {
      console.log("Found:", fullPath);
    }
  }
}

module.exports = (directory, filename) => {
  try {
    search(directory, filename);
  } catch (err) {
    console.error("Error searching file:", err.message);
  }
};
