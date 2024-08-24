const { Command } = require('commander');
const fs = require('fs');
let program = new Command();

let todos = [];

program
    .name('CLI-Task Application')
    .description('This Task Management Application only contains add, delete and Mark as done functionalities')
    .version('0.8.0');

program.command('addTodo')
    .description('Adds a New Task to file')
    .argument('<number>', 'An ID number to store it')
     .argument('<string>', 'A Task title to add to the file')
     .argument('<boolean>', "Intially mark it false ")
    .action((number, string, boolean) => {
        fs.readFile('todos.json', 'utf-8', (err, data) => {
            if (err && err.code !== 'ENOENT') {
                console.error(`Error reading the file: ${err}`);
            } else {
                if (data) {
                    todos = JSON.parse(data);
                }
                // Create the new todo item with the correct ID
                const newTodo = { id: Number(number), task: string , completed : boolean === 'flase'};
                todos.push(newTodo);

                // Write the updated todos back to the file
                fs.writeFile('todos.json', JSON.stringify(todos, number, 2), 'utf-8', (err) => {
                    if (err) {
                        console.error(`The Error is Due to ${err}`);
                    } else {
                        console.log(`Added New Task Successfully`);
                    }
                });
            }
        });
    });

program.command('delete  ')
     .description('Delets the Todo According to the given Id or Task')
     .argument('<number>', "Id to Check it whether the Task is there or not")
     .action((number) => {
          fs.readFile('todos.json', 'utf-8', (err, data) => {
               if (err) {
                    console.log(err);
               } else {
                    if (data) {
                         todos = JSON.parse(data);
                    }
                    let updatedTodos = todos.filter(todo => todo.id !== Number(number));

                    if (updatedTodos.length === todos.length) {
                         console.log(`No Task is found with the Id`);
                    } else {
                         fs.writeFile('todos.json', JSON.stringify(updatedTodos, null, 2), 'utf-8', (err) => {
                              if (err) {
                                  console.error(`Error writing to the file: ${err}`);
                              } else {
                                  console.log(`Task with ID ${number}  has been deleted.`);
                              }
                         });
                    }
               }
          })
     })

program.command('update')
     .description('Update the Todo')
     .argument('<number>', 'ID of the task to update')
     .argument('<string>', 'New task title')
     .action((number, string) => {
         fs.readFile('todos.json', 'utf-8', (err, data) => {
             if (err) {
                 console.error(`Error reading the file: ${err}`);
             } else {
                 if (data) {
                     todos = JSON.parse(data);
                 }
 
                 // Convert number to type number for comparison
                 const idToUpdate = Number(number);
 
                 // Find the index of the task to update
                 let taskFound = false;
                 let updatedTodos = todos.map(todo => {
                     if (todo.id === idToUpdate) {
                         taskFound = true;
                         return { ...todo, task: string }; // Update task
                     }
                     return todo; // Return unchanged task
                 });
 
                 // Check if the task was updated
                 if (!taskFound) {
                     console.log(`No Task found with ID ${idToUpdate}`);
                 } else {
                     // Write the updated todos back to the file
                     fs.writeFile('todos.json', JSON.stringify(updatedTodos, null, 2), 'utf-8', (err) => {
                         if (err) {
                             console.error(`Error writing to the file: ${err}`);
                         } else {
                             console.log(`Task with ID ${idToUpdate} has been updated.`);
                         }
                    });
               }
          }
     });
});

program.command('complete')
    .description('Mark a task as completed')
    .argument('<number>', 'ID of the task to complete')
    .action((number) => {
        fs.readFile('todos.json', 'utf-8', (err, data) => {
            if (err) {
                console.error(`Error reading the file: ${err}`);
            } else {
                if (data) {
                    todos = JSON.parse(data);
                }

                // Convert number to type number for comparison
                const idToComplete = Number(number);

                // Flag to check if the task was found and updated
                let taskFound = false;

                // Update the completed status of the task
                let updatedTodos = todos.map(todo => {
                    if (todo.id === idToComplete) {
                        taskFound = true;
                        return { ...todo, completed: true }; // Mark as completed
                    }
                    return todo; // Return unchanged task
                });

                // Check if the task was updated
                if (!taskFound) {
                    console.log(`No Task found with ID ${idToComplete}`);
                } else {
                    // Write the updated todos back to the file
                    fs.writeFile('todos.json', JSON.stringify(updatedTodos, null, 2), 'utf-8', (err) => {
                        if (err) {
                            console.error(`Error writing to the file: ${err}`);
                        } else {
                            console.log(`Task with ID ${idToComplete} has been marked as completed.`);
                        }
                    });
                }
            }
        });
    });


     
program.parse();
