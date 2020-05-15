import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-task-details',
  templateUrl: 'task-details.page.html',
  styleUrls: ['task-details.page.scss'],
})
export class TaskDetailsPage {

  @Input() Id: number;
  @Input() Title: string;
  @Input() Description: string;
  @Input() DueDate: Date;
  @Input() Status: boolean;
  @Input() TaskTypeId: number;

  constructor(public modalController: ModalController) {}

  close() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
