import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./task-list/task-list.module').then( m => m.TaskListPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add-task/add-task.module').then( m => m.AddTaskPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./task-details/task-details.module').then( m => m.TaskDetailsPageModule)
  },

  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
