import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage, base64ToFile } from 'ngx-image-cropper';

@Component({
  selector: 'app-crop-image',
  templateUrl: './crop-image.component.html',
  styleUrls: ['./crop-image.component.scss']
})
export class CropImageComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  public croppedImageFile : File; 
  
  constructor() { }

  ngOnInit(): void {
  }


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    let image: any = this.base64ToFile(event);
    this.croppedImage = event.base64;


    //convert to file 
    this.croppedImageFile = new File([image], 'demo', { type: "image/jpeg" })
    // console.warn(image);
    // console.warn(this.croppedImage);
    // console.warn(this.croppedImage==image);
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
  base64ToFile(event: any) {
    return base64ToFile(event.base64);
  }

}
