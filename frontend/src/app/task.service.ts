import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webService: WebService) { }

  getBlogs(){
    return this.webService.get('blogs');
  }

  createBlog(title: string){
    return this.webService.post('blogs', {title});
  }

  getContents(blogId: string){
    return this.webService.get(`blogs/${blogId}/contents`);
  }

  createContent(blogId: string, info: string){
    return this.webService.post(`blogs/${blogId}/contents`, { info });
  }

  deleteBlog(blogId: string){
    return this.webService.delete(`blogs/${blogId}`);
  }

  deleteContent(blogId: string, contentId: string){
    return this.webService.delete(`blogs/${blogId}/contents/${contentId}`);
  }
}
