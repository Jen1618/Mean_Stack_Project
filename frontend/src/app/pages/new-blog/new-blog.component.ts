import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss']
})
export class NewBlogComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  addBlog(value: string){
    this.taskService.createBlog(value).subscribe((blog: any) => this.router.navigate(['/blogs', blog._id]));
  }
}
