#! /usr/bin/env node

// Project ATM Machine

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.green("ATM By Maria Murad!!!"));

// Here we are Adding Our Balance & Pin in Variables
let MyBalance: number = 10000.00; // Dollar
let MyPin: number = 1234;

console.log(chalk.bgYellow(`Account Balance $${MyBalance}`));

// It Will Ask Our Pin
let MyPinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.green("Please Enter Your Pin To Proceed")
    }
]);

// if we type Pin Correct it will show this
if (MyPinAnswer.pin === MyPin) {
    console.log(chalk.bold.green("Welcome to our Bank's ATM Service!"));
    console.log(chalk.bold.cyan("Thank you for choosing us for your banking needs."));

    // After Adding Correct Pin It Will Ask These Choice
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: chalk.bgMagenta("Select Your Operation"),
            type: "list",
            choices: ["Withdraw", "Quick Cash", "Check balance"]
        }
    ]);

    // if Select Withdraw it will Show this
    if (operationAnswer.operation === "Withdraw") {
        let WithdrawAmount = await inquirer.prompt([
            {
                name: "Amount",
                message: chalk.bgGray("Enter Amount To Withdraw $"),
                type: "number"
            }
        ]);

        // Here we ARE Adding IfElse statement so a person can't withdraw more money than their actual balance
        if (MyBalance >= WithdrawAmount.Amount) {
            MyBalance -= WithdrawAmount.Amount;
            console.log(chalk.bgBlue(`Your Remaining Balance is: $${MyBalance}`));
        } else {
            console.log(chalk.red("Insufficient Balance"));
        }
    }
    // If select Quick Cash it will show this
    else if (operationAnswer.operation === "Quick Cash") {
        let QuickCashAmount = await inquirer.prompt([
            {
                name: "Amount",
                message: "Select Amount $",
                type: "list",
                choices: [1000.00, 2000.00, 5000.00, 10000.00]
            }
        ]);
        MyBalance -= QuickCashAmount.Amount;
        console.log(chalk.bgBlue(`Your Remaining Balance is: $${MyBalance}`));
    }
    // if select Check Balance it will show this
    else if (operationAnswer.operation === "Check balance") {
        console.log(chalk.bgBlue(`Your Remaining Balance is: $${MyBalance}`));
    }
}
// if we type Pin Incorrect it will show this
else {
    console.log(chalk.bgRedBright("Incorrect Pin"));
}
