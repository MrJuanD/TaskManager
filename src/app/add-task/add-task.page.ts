import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskType } from 'src/Models/Task';

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
  Status: boolean;
  TaskType: TaskType;
  TaskTypeId: number;

  constructor(public router: Router) { }

  addTask() {
    this.TaskType = this.TaskTypes.find(item => item.Id == this.TaskTypeId);
    console.log(this.Title);
    console.log(this.Description);
    console.log(this.DueDate);
    console.log(this.Status);
    console.log(this.TaskType);
  }
  goToTaskList() {
    this.router.navigateByUrl('list');
  }
}
