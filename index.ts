#! /usr/bin/env node

import inquirer from "inquirer";
let number = 18;
let answer = await inquirer.prompt({
  name: "age",
  type: "number",
  message: "Enter your age",
});
if (answer.age < number) {
  console.log("You are under age.");
} else {
  console.log("You are eligible.");
}
let Answer = await inquirer.prompt([
    {
  name: "your",
  message: "Select your course.",
  type: "list",
  choices: ["python", "typescript", "C++", "SQL"],
}])
if (answer.age < number){
    console.log("You are under age.")
}else if (answer.age > number){
    console.log("Congratulations! You are eligible and selected in this course.")
}else if (answer.age === number){
    console.log("Congratulations! You are eligible and selected in this course.")
}
    
