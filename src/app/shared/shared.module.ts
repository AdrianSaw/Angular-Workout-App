import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'ngx-bootstrap/accordion';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
      CollapseModule.forRoot()
  ],
  exports: [
    AccordionModule,
    CollapseModule
  ]
})

export class SharedModule { }
