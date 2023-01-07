import chalk from "chalk";
import { Command } from "commander";
import { log } from "@src/infra/log";
import { register as registerWelcome } from "@src/modules/welcome/register";

const program = new Command();

log(chalk.bgHex("#f35627").inverse("Welcome to the CLI!"));

registerWelcome(program);

program.parse(process.argv);
