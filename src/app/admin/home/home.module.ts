import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared-module/shared.module';

const homeRoute: Route[] = [
    {
    path: '',
    component: HomeComponent
    }
];

@NgModule({
  declarations: [
        HomeComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(homeRoute),
  ],
})
export class HomeModule { }