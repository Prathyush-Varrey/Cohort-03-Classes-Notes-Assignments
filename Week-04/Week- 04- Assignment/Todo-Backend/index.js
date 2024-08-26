let express = require('express');
let fs = require('fs');
const app = express();

let todos = [];

let port = '3500';
let id = 1; 
app.use(express.json());

fs.readFile('todos.json', 'utf-8', (err, data) => {
     if (err) {
          console.log(err);
     } else if(data) {
          todos = JSON.parse(data);
          id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
     }
})

// app.use(express.bodyParser());

app.get('/', (req, res) => {
     res.send(todos);
});

app.post('/addTodo', (req, res) => {
     let todo = req.body.todo;
     
     if (!todo || todo.trim() === "") {
          res.send(`Please add your todo`);
     }
          todos.push({
               id,
               todo
          })
               
     fs.writeFile('todos.json', JSON.stringify(todos, null, 2), 'utf-8', (err) => {
          if (err) {
               console.log(err);
               res.status(500).send(`Failed to send data`)
          }
          res.send("Added Todo Successfully")
     })
          
     id += 1;

});

app.put('/updateTodo', (req, res) => {
     const { id, todo } = req.body; // Use `todo` to match the incoming data
 
     if (!id || !todo) {
         return res.status(400).send("ID and todo are required");
     }
 
     // Find the index of the todo item to update
     const todoInd = todos.findIndex(todoItem => todoItem.id === id);
 
     if (todoInd !== -1) {
         // Update the todo text
         todos[todoInd].todo = todo;
 
         // Write the updated todos array to the file
         fs.writeFile('todos.json', JSON.stringify(todos, null, 2), 'utf-8', (err) => {
             if (err) {
                 console.error("Error writing to file:", err);
                 return res.status(500).send("Failed to update todo");
             }
             res.send("Updated Todo Successfully");
         });
     } else {
         res.status(404).send("Todo not found");
     }
 });
 
 

app.delete('/removeTodo', (req, res) => {
     let delTodoItem = req.body.id;
     let initialLen = todos.length;
     todos = todos.filter(todo => todo.id !== delTodoItem);
     if (todos.length < initialLen) {
          fs.writeFile('todos.json', JSON.stringify(todos, null, 2), 'utf-8', (err) => {
               if (err) {
                    console.log(err);
                    return res.status(500).send('Filed to delete Todo');
               }
               res.send("Deleted Todo Successfully");
          });
      } else {
          res.status(404).send("Todo not found");
      }
} )

app.listen(port, () => {
     console.log(`Application Started running at port ${port}`);
});