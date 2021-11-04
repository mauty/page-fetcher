const log = console.log

const request = require('request');
const fs = require('fs')

const cliArgumentsArray = process.argv.slice(2);
const url = cliArgumentsArray[0]
const filePath = cliArgumentsArray[1]

request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err)
      return
    }
    let fileSize = body.length;
    log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
    //file written successfully
  })
});
