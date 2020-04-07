const spinner = {100: '|   ', 300: '/   ', 500: '-   ', 700: '\\   ', 900: '|   \n'};

for (let each in spinner) {
  setTimeout(() => {
    process.stdout.write(`\r ${spinner[each]}`);
  }, each)
}