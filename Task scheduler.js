// Define the Task object
class Task {
    constructor(title, description, dueDate) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.completed = false;
    }
  
    // Method to mark task as completed
    markAsCompleted() {
      this.completed = true;
    }
  }
  
  // Define the TaskScheduler object
  class TaskScheduler {
    constructor() {
      this.tasks = [];
    }
  
    // Method to add a task to the scheduler
    addTask(title, description, dueDate) {
      const task = new Task(title, description, dueDate);
      this.tasks.push(task);
    }
  
    // Method to display tasks sorted by due date
    displayTasksSortedByDueDate() {
      const sortedTasks = this.tasks.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      console.log("Tasks sorted by due date:");
      sortedTasks.forEach(task => {
        console.log(`${task.title} - Due: ${task.dueDate} - ${task.completed ? 'Completed' : 'Incomplete'}`);
      });
    }
  
    // Method to update task details or mark as completed
    updateTask(title, newDescription, newDueDate, markCompleted) {
      const task = this.tasks.find(task => task.title === title);
      if (task) {
        if (newDescription) {
          task.description = newDescription;
        }
        if (newDueDate) {
          task.dueDate = newDueDate;
        }
        if (markCompleted) {
          task.markAsCompleted();
        }
      } else {
        console.log("Task not found!");
      }
    }
  
    // Method to remove a task from the scheduler
    removeTask(title) {
      this.tasks = this.tasks.filter(task => task.title !== title);
    }
  }
  
  // Example usage:
  const scheduler = new TaskScheduler();
  
  scheduler.addTask("Complete project", "Finish the project report", "2024-03-15");
  scheduler.addTask("Call client", "Discuss project updates", "2024-03-10");
  scheduler.addTask("Buy groceries", "Shopping for the weekend", "2024-03-08");
  
  scheduler.displayTasksSortedByDueDate();
  
  console.log("\nUpdating task 'Call client' details and marking as completed:");
  scheduler.updateTask("Call client", "Discuss final milestones", "2024-03-12", true);
  scheduler.displayTasksSortedByDueDate();
  
  console.log("\nRemoving task 'Buy groceries':");
  scheduler.removeTask("Buy groceries");
  scheduler.displayTasksSortedByDueDate();
  





  