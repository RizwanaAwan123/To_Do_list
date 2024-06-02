import inquirer from "inquirer";
let todos : string[] = [];
let condition = true;


while (condition){
let addTask = await inquirer.prompt(
    [
       {
           name: "todo",
           type: "input",
           message: "What do you want to add in your todo?"
       },
       {
           name : "addmore",
           type : "confirm",
           message: "Do you want to add more Todo?",
           default: "false"
        }  
    ]

);
todos. push(addTask.todo);
condition = addTask.addmore
console.log(todos)
}