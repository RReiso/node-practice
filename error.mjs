import { readFile } from "fs";

readFile(new URL("app.mjs", import.meta.url), "utf-8", (err, data) => {
  if (err) {
    console.log("err", err);
    throw err;
  } else {
  }
});
