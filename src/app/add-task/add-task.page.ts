import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskType, Task } from 'src/Models/Task';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-task',
  templateUrl: 'add-task.page.html',
  styleUrls: ['add-task.page.scss'],
})
export class AddTaskPage {

  TaskTypes: TaskType[] = [{
    Id: 1,
    IconName: "at-outline",
    TaskType: "Email"
    },
    {
    Id: 2,
    IconName: "people-outline",
    TaskType: "Meeting"
    },
    {
    Id: 3,
    IconName: "card-outline",
    TaskType: "Shopping"
    },
    {
    Id: 4,
    IconName: "fast-food-outline",
    TaskType: "Meal"
    },
    {
    Id: 5,
    IconName: "body-outline",
    TaskType: "Party"
    }]

  Title: string;
  Description: string;
  DueDate: Date;
  Status:  any;
  TaskType: TaskType;
  TaskTypeId: number;

  constructor(public storage: Storage, public router: Router) { }

  addTask() {
    if (this.validateForm())
    {
      this.TaskType = this.TaskTypes.find(item => item.Id == this.TaskTypeId);
      this.storage.get("taskId").then(item =>
       {
         this.storage.get("tasks").then(item2 => {
           let tasks: Task[] = JSON.parse(item2);
           if (tasks == null) {
             tasks = []
           }
           let newTask: Task = {Id: item ? item + 1 : 1, Title: this.Title, Description: this.Description,
              DueDate: this.DueDate, Status: this.Status == "true" || this.Status == true, Type: this.TaskType};
              tasks.push(newTask);
              this.storage.set("taskId", JSON.stringify(newTask.Id));
              this.storage.set("tasks", JSON.stringify(tasks));
              this.goToTaskList();
              
         });
       });
    }
    else alert("All fields are requied!");
  }

validateForm() {
  return this.Title != null && this.Title != '' && this.Description != null &&
    this.Description != '' && this.DueDate != null && this.DueDate.toString() != ''
      && this.Status != null && this.TaskTypeId != null;
}

  goToTaskList() {
    // console.log(this.Title != null && this.Title != "" && this.Description != null &&
    // this.Description != "" && this.DueDate && this.DueDate  != null && this.DueDate.toString() != ""
    //   && this.Status != null && this.TaskTypeId != null);
    //    console.log(this.Title);
    //  console.log(this.Description);
    //  console.log(this.DueDate);
    //  console.log(this.Status);
    //  console.log(this.TaskTypeId);
    this.router.navigateByUrl('list').then(() => {
      window.location.reload();
    });;
  }
}
