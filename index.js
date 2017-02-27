const fs = require('fs');

module.exports = {
  /**
  * readFile()
  * Loads a file in async and parses it
  *
  * @param {String} filename
  */
  readFile: (filename) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, (err, data) => {
        if (err) { // If failed
          reject(err); // Reject
        } else {
          try {
            const parsed = JSON.parse(data); // Try to parse
            resolve(parsed);
          } catch (e) {
            reject(e); // Reject if failed to parse
          }
        }
      })
    });
  },
};
