// console.log("__dirname", __dirname);
// console.log("__filename", __filename);
// these globals are not accessible using ES6 modules

import { readFile, writeFile } from "fs/promises";

// get stream representaton of file
// readFile returns Promise

// const template = await readFile(new URL("template.html", import.meta.url));
// console.log("template", template); // buffer
// convert to string
// template.toString()

// you don't need async keyword when you use await in tope level  scope
let template = await readFile(
  new URL("template.html", import.meta.url),
  "utf-8"
);
console.log("template", template); // string

const data = {
  title: "Learn Node.js",
  body: "My HTML",
};

for (const [key, value] of Object.entries(data)) {
  template = template.replace(`{${key}}`, value);
}
console.log("template", template);

//write file back to disk

await writeFile(new URL("index.html", import.meta.url), template);
