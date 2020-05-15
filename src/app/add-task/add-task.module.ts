import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AddTaskPage } from './add-task.page';

import { AddTaskPageRoutingModule } from './add-task-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTaskPageRoutingModule
  ],
  declarations: [AddTaskPage]
})
export class AddTaskPageModule {}
