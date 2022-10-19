#! /usr/bin/env node

import fetch from "node-fetch";
import open from "open";
import yargs from "yargs";

console.log(process.argv);

// yargs add args to an object
const { argv } = yargs(process.argv);
console.log(argv);

const response = await fetch("https://reddit.com/.json");
const data = await response.json();
const children = data.data.children;
const randomPost = children[Math.floor(Math.random() * children.length)].data;
const link = `https://reddit.com/${randomPost.permalink}`;

if (argv.print) {
  console.log(`
  title: ${randomPost.title}
  link: ${link}`);
} else {
  open(link);
}
