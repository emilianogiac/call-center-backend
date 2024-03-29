const fs = require("fs");
const util = require("util");
const unlinkSync = util.promisify(fs.unlink);
const deleteFile = async (path) => {
  console.log(path);

  try {
    if (fs.existsSync(path)) {
      await unlinkSync(path);
    } else {
      console.log("not found");
    }
  } catch (err) {
    console.log(err);
    throw new Error(`Error deleting file: ${err.message}`);
  }
};

module.exports = deleteFile;
