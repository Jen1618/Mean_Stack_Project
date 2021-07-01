import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBlogComponent } from './pages/new-blog/new-blog.component';
import { NewContentComponent } from './pages/new-content/new-content.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';


const routes: Routes = [
  { path: '', redirectTo: 'blogs', pathMatch: 'full' },
  { path: 'blogs',component: TaskViewComponent},
  { path: 'blogs/:blogId', component: TaskViewComponent},
  { path: 'new-blog', component: NewBlogComponent},
  { path: 'blogs/:blogId/new-content', component: NewContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
