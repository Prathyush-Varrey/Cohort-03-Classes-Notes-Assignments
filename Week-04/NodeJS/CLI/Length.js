const { Command } = require('commander');
const fs = require('fs');
// need to create a class for this
let program = new Command();

program
     .name('lenght-counter-util')
     .description('CLI to count the number of letters in your file')
     .version('0.8.0')

program.command('count')
     .description('Count the Number of words in the file')
     .argument('<file>', 'a file path to count')
     .action((file) => {
          fs.readFile(file, 'utf-8', (err, data) => {
               if (err) {
                    console.log(`The Error is ${err}`);
               } else {
                    const lines = data.split('\n').length;
                    console.log(`There are ${lines} letters in this ${file}`)
                    console.log(`The Data is: \n ${data}`);
                    
               }
          })
     })
     
program.command('update')
     .description('You Can Update you files Data here')
     .argument('<file>', 'a file path to update')
     .argument('<string>', 'a string to update your file')
     .action((file, string) => {
          fs.writeFile(file,string, 'utf-8', (err, data) => {
               if (err) {
                    console.log(err);
               } else {
                    console.log(`The file ${file} is successfully updated`);
               }
          })
     })

program.command('read')
     .description('You Can Read Files Data here')
     .argument('<file>', 'Add a File Path to read')
     .action((file) => {
          fs.readFile(file, 'utf-8', (err, data) => {
               if (err) {
                    console.log(err);
               } else {
                    console.log(`The Data In the files is:`);
                    console.log(`${data}`);
               }
          })
     })
program.parse();
