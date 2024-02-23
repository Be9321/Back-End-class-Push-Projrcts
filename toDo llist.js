// Define the Task object with the given name and description.
class task{
    constructor(name,category,description) {
        this.name = 'name';
        this.category = 'category';
        this.description = false;
}

// method to mark Tasks as completed 
marktaskAsCompleted() {
    this.completed = true;
}

// define the ToDolist object
ToDolist () {
    constructor() {
        this.tasks = []
    }
}
// method to add a task to the ToDolist object
addTask(name,category) {
    const task = new addTask('name,category');
    this.tasks.push(task);
} 
// method to display tasks group grouped by category
dispalyTasksGroupedByCategory() {
    const tasksByCategory = {};
    this.tasks.forEach(task=> {
        if(!tasksByCategory[task.category]) {
tasksByCategory[task.category]= [];
        }
tasksByCategory[task.category].push(task);
    });
//dispaly tasks grouped by category
for (const category in tasksByCategory) {
    console.log(category + ":");
    tasksByCategory[category].forEach(task=> {
        console.log(`-[${task.completed? 'x' : ''}] ${task.name}`);
    });
}
}
//method a task as a completed
markTaskAsCompleted(taskName) {
    const task = this.tasks.find(task => task.name === taskName );
    if(task) {
        task.markAsCompleted();
    } else {
        console.log("Task not found!");
    }
}
//method to remove a task from the list
removeTask(taskName){
    this.tasks.filter(task => task.name !=taskName);
}
}
// example usage 
const ToDolist = new ToDolist();
ToDolist.addTask("Buy chocolate", "personal");
ToDolist.addTask("Finsish my assignements", "TASK");
ToDolist.addTask("take a nap" , "personal");

console.log("task before marked as completed:");
ToDolist.displayTasksByCategory();

ToDolist.markTaskAsCompleted("Buy chocolate");

console.log("\ntasks after marked as completed:");
ToDolist.displayTasksByCategory();

ToDolist.removeTask("Finish my assignements");

console.log("\ntasks after removing 'Finish my assignements':");
ToDolist.displayTasksByCategory();
    
