import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewBlogComponent } from './pages/new-blog/new-blog.component';
import { NewContentComponent } from './pages/new-content/new-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskViewComponent,
    NewBlogComponent,
    NewContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
