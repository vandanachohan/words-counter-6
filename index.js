#! /usr/bin/env node
// importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
// Display the user ColorFull Welcome Massege
console.log(chalk.bold.bgCyanBright("\n\t\t Welcome *Vandylicious!*"));
console.log("*".repeat(60));
// Prompt the user to enter a Sentence
let answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter a Sentence",
    },
]);
// Triming the sentence and splitting it into words based on "spaces"
const words = answers.Sentence.trim().split(" ");
// Analysis of user  input sentance
console.log("*".repeat(60));
console.log(chalk.bold(". Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("^".repeat(60));
