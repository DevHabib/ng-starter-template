import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as components from './index';
import { LayoutsRoutingModule } from './layouts-routing.module';


@NgModule({
  declarations: [components.component],
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ],
  exports: [components.component]
})
export class LayoutsModule { }
