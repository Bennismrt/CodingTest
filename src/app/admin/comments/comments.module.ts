import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments.component';
import { SharedModule } from 'src/app/shared-module/shared.module';

const commentsRoute: Route[] = [
    {
    path: '',
    component: CommentsComponent
    }
];

@NgModule({
  declarations: [
        CommentsComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(commentsRoute),
  ],
})
export class CommentsModule { }