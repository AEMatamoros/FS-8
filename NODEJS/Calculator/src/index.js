const yargs = require("yargs");

yargs
  .command({
    command: "add",
    describe: "Add two numbers -> add --num1 value --num2 value",
    builder: {
      num1: {
        describe: "Fist Number in Operation",
        demandOption: true,
        type: "number",
      },
      num2: {
        describe: "Second Number in Operation",
        demandOption: true,
        type: "number",
      },
    },
    handler: (argv) => {
      const result = argv.num1 + argv.num2;
      console.log("The result of the add operation is : ", result);
    },
  })
  .command({
    command: "substract",
    describe: "Substract two numbers -> substract --num1 value --num2 value",
    builder: {
      num1: {
        describe: "Fist Number in Operation",
        demandOption: true,
        type: "number",
      },
      num2: {
        describe: "Second Number in Operation",
        demandOption: true,
        type: "number",
      },
    },
    handler: (argv) => {
      const result = argv.num1 - argv.num2;
      console.log("The result of the add operation is : ", result);
    },
  })
  .command({
    command: "multiply",
    describe: "Multiply two numbers -> multiply --num1 value --num2 value",
    builder: {
      num1: {
        describe: "Fist Number in Operation",
        demandOption: true,
        type: "number",
      },
      num2: {
        describe: "Second Number in Operation",
        demandOption: true,
        type: "number",
      },
    },
    handler: (argv) => {
      const result = argv.num1 * argv.num2;
      console.log("The result of the add operation is : ", result);
    },
  })
  .command({
    command: "divide",
    describe: "Divide two numbers -> divide --num1 value --num2 value",
    builder: {
      num1: {
        describe: "Fist Number in Operation",
        demandOption: true,
        type: "number",
      },
      num2: {
        describe: "Second Number in Operation",
        demandOption: true,
        type: "number",
      },
    },
    handler: (argv) => {
      if (argv.num2 === 0) {
        console.log("No puedes dividir un numero entre cero");
        return;
      }
      const result = argv.num1 / argv.num2;
      console.log("The result of the add operation is : ", result.toFixed(2));
    },
  })
  .help().argv;
