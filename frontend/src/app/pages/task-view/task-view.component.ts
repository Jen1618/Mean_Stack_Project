import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import Blog from 'src/app/models/blog';
import Content from 'src/app/models/content';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  blogs: Blog[] = [];
  contents: Content[] = [];
  blogId: string;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.taskService.getBlogs().subscribe((blogs: any) => this.blogs = blogs);
    
    this.route.params.subscribe((params: Params) => {
      this.blogId = params.blogId;
      if (!this.blogId) return;
      this.taskService.getContents(this.blogId).subscribe((contents: any) => this.contents = contents);
    });
}

deleteContent(content: Content) {
  this.taskService.deleteContent(this.blogId, content._id)
      .subscribe((content: any) => this.contents = this.contents.filter(t => t._id !== content._id));
}

deleteBlog(blog: Blog) {
  // You don't want to pass this.listId because this.listId refers to
  // the CURRENTLY SELECTED LIST, not necessarily the list that just got
  // its X button clicked...
  this.taskService.deleteBlog(blog._id)
      .subscribe(() => this.blogs = this.blogs.filter(b => b._id !== blog._id));
}

addContentClick() {
  if (!this.blogId) {
    alert("Please select a blog to add content to");
    return;
  }
  this.router.navigate(['./new-content'], { relativeTo: this.route });
}
}