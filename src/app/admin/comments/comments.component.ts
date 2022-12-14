import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { fatchServices } from 'src/app/services/services';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  subPost : Subscription;
  post: any;
  comments: any;

  constructor(
    private _fatchApiServices : fatchServices,
    private _router : Router
  ) { 
    this.subPost = this._fatchApiServices.selectedPost.subscribe((res) => {
      console.log('res', res);
      this.post = res;
      
    });
  }

  ngOnInit(): void {
    this.fatchComments();
  }

  ngOnDestroy(){
    if(this.subPost){
      this.subPost.unsubscribe();
    }
    if(this.subPost){
      this._fatchApiServices.selectedPost.next(null);
    }
  }

  fatchComments(){
    this._fatchApiServices.getComments(this.post.id).subscribe((res) => {
      this.comments = res;
      console.log('comments', this.comments);
    });
  }

  back(){
    this._router.navigateByUrl('/');
  }

}
