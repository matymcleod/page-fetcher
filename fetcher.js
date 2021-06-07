const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);

request(args[0], (error, request, body) => {
  if (error) {
    throw new Error('Sorry but that page could not be found');
  }
  fs.writeFile(args[1], body, (error) => {
    if (error) {
      throw new Error('Sorry but that location could not be found');
    }
    console.log(`Downloaded the requested file: ${request ['headers']['content-length']} bytes to ${args[1]}`);
  });
});