import chalk from "chalk";
import { Command } from "commander";
import { log } from "@src/infra/log";
import { register as registerWelcome } from "@src/modules/welcome/register";

const program = new Command();

log(chalk.hex("#f35627")("Welcome to the DS_CLI! \n\n"));

registerWelcome(program);

if (process.argv.length < 3) {
  program.help();
} else {
  program.parse(process.argv);
}
