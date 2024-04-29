#! /usr/bin/env node
import inquirer from "inquirer";
let number = 25;
let answer = await inquirer.prompt({
    name: "age",
    type: "number",
    message: "Enter your age",
});
if (answer.age < number) {
    console.log("You are under age.");
}
else {
    console.log("You are eligible.");
}
let Answer = await inquirer.prompt([
    {
        name: "your",
        message: "Select your course.",
        type: "list",
        choices: ["python", "typescript", "C++", "SQL"],
    }
]);
console.log("Congratulations! you are eligible and selected in this course.");
