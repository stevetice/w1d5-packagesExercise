var chalk = require("chalk");

var message = chalk.bold.bgCyanBright.red("Hello ") + chalk.underline.yellow("World");
console.log(message);