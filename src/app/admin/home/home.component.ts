import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fatchServices } from 'src/app/services/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(
    private _fatchApiServices : fatchServices,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.fatchUsers();
  }

  fatchUsers(){
    this._fatchApiServices.getUser().subscribe((res) => {
      this.user = res;
      console.log('res', res);
      
    })
  }

  showPost(result: any){
    console.log('show post', result);
    this._fatchApiServices.selectedUsers.next(result);
    this._router.navigateByUrl('/post');
  }


}
