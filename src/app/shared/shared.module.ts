import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCropperModule } from 'ngx-image-cropper';

import { CropImageComponent } from '../components/crop-image/crop-image.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [CropImageComponent],
  imports: [
    CommonModule,
    ImageCropperModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports:[CropImageComponent]
})
export class SharedModule { }
