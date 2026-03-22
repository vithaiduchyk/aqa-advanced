import chalk from 'chalk';

const error = chalk.bold.red;
const warning = chalk.hex('#FfA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));