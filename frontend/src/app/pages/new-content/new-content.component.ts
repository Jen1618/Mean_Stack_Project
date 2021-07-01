import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.scss']
})
export class NewContentComponent implements OnInit {

  blogId: string;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
  ) { 

    this.route.params.subscribe((params: Params) => this.blogId = params.blogId);
  }

  ngOnInit(){
  }
    addContent(value: string){
      this.taskService.createContent(this.blogId, value).subscribe(() => this.router.navigate(['../'], {relativeTo: this.route}));
    }
  
}
