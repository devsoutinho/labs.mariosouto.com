import { Command } from "commander";
import inquirer from "inquirer";
import { module } from "./module";

export function register(program: Command) {
  program
    .command("welcome")
    .description("Welcome to the CLI")
    .action(async () => {
      const { name } = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is your name?",
        },
      ]);
      module(name);
    });
}
