import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagensRoutingModule } from './imagens-routing.module';
import { ImagensComponent } from './imagens.component';

@NgModule({
  declarations: [ImagensComponent],
  imports: [
    CommonModule,
    ImagensRoutingModule
  ]
})
export class ImagensModule { }
