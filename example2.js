import fs from "fs";

fs.readFile("myfile.txt", (err, data) => {
  if (err) {
    console.error("Error reading file", err);
    return;
  }

  console.log("File content is", data);
});
