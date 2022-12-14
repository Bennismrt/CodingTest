import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { fatchServices } from 'src/app/services/services';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: any;
  user: any;
  subUser: Subscription;

  showMore = false;

  constructor(
    private _fatchApiServices : fatchServices,
    private _router : Router
  ) { 

    this.subUser = this._fatchApiServices.selectedUsers.subscribe((res) => {
      console.log('res', res);
      this.user = res;
      
    });

  }

  ngOnInit(): void {
    this.fatchPost();
  }

  ngOnDestroy(){
    if(this.subUser){
      this.subUser.unsubscribe();
    }
    if(this.subUser){
      this._fatchApiServices.selectedUsers.next(null);
    }
  }

  fatchPost(){
    this._fatchApiServices.getPost().subscribe((res) => {
      if(Array.isArray(res)){
        let dataRes = [];
        for(const data of res){
          data.showMore = false;
          data.name = this.user.name;
          dataRes.push(data);
        }
        this.post = dataRes.filter(res => res.userId === this.user.id);
      }
      console.log('post', this.post);
    });
  }

  more(i: string | number){
    this.post[i].showMore = true;
  }

  less(i: string | number){
    this.post[i].showMore = false;
  }

  showComments(data: any){
    this._fatchApiServices.selectedPost.next(data) ;
    this._router.navigateByUrl('/comments');
  }

  back(){
    this._router.navigateByUrl('/');
  }

}

