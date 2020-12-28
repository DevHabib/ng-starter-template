import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as components from './index';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddPostComponent } from './add-post/add-post.component';


@NgModule({
  declarations: [components.component],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
