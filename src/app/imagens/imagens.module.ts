import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagensRoutingModule } from './imagens-routing.module';
import { ImagensComponent } from './imagens.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [ImagensComponent],
  imports: [
    CommonModule,
    ImagensRoutingModule,
    ScrollingModule
  ]
})
export class ImagensModule { }
