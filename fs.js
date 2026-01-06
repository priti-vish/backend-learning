const fs = require("fs");

console.log("started");
fs.writeFile("test.txt", "This is a test file", () => {
  fs.appendFile("test.txt", "Adding some data", () => {
    fs.readFile("test.txt", (err, data) => {
      console.log(err, data.toString());
      console.log("Done");
      //repeat
      fs.writeFile("test.txt", "This is a testing file", () => {
        fs.appendFile("test.txt", "Adding more data", () => {
          fs.readFile("test.txt", (err, data) => {
            console.log(err, data.toString());
            console.log("Done");
          });
        });
      });
    });
  });
});

console.log("completed");
