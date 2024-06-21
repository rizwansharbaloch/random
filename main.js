#! usr/bin/env node
import inquirer from "inquirer";
console.log(" welcome at code with Rizwan ahmed");
const randomNumber = 16;
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulation ! you guess a correct number.");
}
else {
    console.log("sorry, you guess a wrong number");
}
