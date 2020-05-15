import { Component, OnInit } from '@angular/core';
import { Task } from 'src/Models/Task';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { TaskDetailsPage } from '../task-details/task-details.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-task-list',
  templateUrl: 'task-list.page.html',
  styleUrls: ['task-list.page.scss'],
})
export class TaskListPage implements OnInit {

  tasks: Task[];

  constructor(public storage: Storage, public modalController: ModalController, public router: Router) {}

  ngOnInit() {
  //  this.tasks = this.getTasks();
  //  console.log(JSON.stringify(this.tasks));
   //  this.storage.set("tasks", JSON.stringify(this.tasks))
     this.storage.get("tasks").then(item =>   this.tasks = JSON.parse(item));
  }

  goToAddTask() {
    this.router.navigateByUrl('add');
  }

  async presentModal(taskId: number) {
    let task = this.tasks.find(item => item.Id == taskId);
      const modal = await this.modalController.create({
        component: TaskDetailsPage,
        componentProps: {
          'Id': task.Id,
          'Title': task.Title,
          'Description': task.Description,
          'DueDate': task.DueDate,
          'Status': task.Status,
          'TaskTypeId': task.Type.Id,
        }
      });
      return await modal.present();
  }

  getTasks() {
    let tasks = [];
    tasks.push(
      {
        Id: 1,
        Title: "Task no 1",
        Description: "This is task number 1",
        DueDate: new Date(),
        Status: false,
        Type: { Id: 1, TaskType: "TASK_TYPE_EMAIL", IconName: "mail-outline" }
      },
      {
        Id: 2,
        Title: "Task no 2",
        Description: "This is task number 2",
        DueDate: new Date(),
        Status: true,
        Type: { Id: 1, TaskType: "TASK_TYPE_EMAIL", IconName: "mail-outline" }
      },
      {
        Id: 3,
        Title: "Task no 3",
        Description: "This is task number 3",
        DueDate: new Date(),
        Status: true,
        Type: { Id: 1, TaskType: "TASK_TYPE_EMAIL", IconName: "mail-outline" }
      },
      {
        Id: 4,
        Title: "Task no 4",
        Description: "This is task number 4",
        DueDate: new Date(),
        Status: false,
        Type: { Id: 1, TaskType: "TASK_TYPE_EMAIL", IconName: "mail-outline" }
      },
      {
        Id: 5,
        Title: "Task no 5",
        Description: "This is task number 5",
        DueDate: new Date(),
        Status: false,
        Type: { Id: 1, TaskType: "TASK_TYPE_EMAIL", IconName: "mail-outline" }
      },
      {
        Id: 6,
        Title: "Task no 6",
        Description: "This is task number 6",
        DueDate: new Date(),
        Status: true,
        Type: { Id: 1, TaskType: "TASK_TYPE_EMAIL", IconName: "mail-outline" }
      }
    );
    return tasks;
  }

}
