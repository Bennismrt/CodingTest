import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { PostComponent } from './post.component';

const homeRoute: Route[] = [
    {
    path: '',
    component: PostComponent
    }
];

@NgModule({
  declarations: [
        PostComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(homeRoute),
  ],
})
export class PostModule { }