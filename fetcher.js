const request = require('request');
const arg = process.argv;
const address = arg[2];
const file = arg[3];
const fs = require('fs');

request(address, (error, response, body) => {
  console.time('Done in ');
  fs.writeFile(file, body, (err) => {
    if (!err) {
      console.timeEnd("Done in ");
      const stats = fs.statSync(file);
      const fileSize = stats["size"];
      console.log('Downloaded and saved ' + stats.size + ' bytes to ' + file);
    };

  })

})
