#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your four digit pin code:",
        type: "number"
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select option",
            choices: ["Withdraw", "Check Balance"],
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "amount",
                message: "Select Amount",
                type: "list",
                choices: [1000, 1500, 2000, 2500, 3000, "other"],
            },
        ]);
        if (amount.amount === "other") {
            let enterAmount = await inquirer.prompt([
                {
                    name: "enterAmount",
                    type: "number",
                    message: "Enter your required amount:",
                }
            ]);
            console.log(`Your remaining balance is ${myBalance - enterAmount.enterAmount}`);
        }
        else if (amount.amount === 1000) {
            console.log(`Your balance remaining is ${myBalance - amount.amount}`);
        }
        else if (amount.amount === 1500) {
            console.log(`Your balance remaining is ${myBalance - amount.amount}`);
        }
        else if (amount.amount === 2000) {
            console.log(`Your balance remaining is ${myBalance - amount.amount}`);
        }
        else if (amount.amount === 2500) {
            console.log(`Your balance remaining is ${myBalance - amount.amount}`);
        }
        else if (amount.amount === 3000) {
            console.log(`Your balance remaining is ${myBalance - amount.amount}`);
        }
        else {
            console.log("Enter valid number");
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code!!!");
}
