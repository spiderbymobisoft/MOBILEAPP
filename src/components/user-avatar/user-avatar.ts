import { Component, Input } from '@angular/core';


@Component({
  selector: 'user-avatar',
  templateUrl: 'user-avatar.html'
})
export class UserAvatarComponent {
  @Input() sizeClass: string = 'thumb';// Can be 'thumb-xs'-'thumb-sm'-'thumb-md'-'thumb-lg'
  @Input() source: string = 'assets/icon/login-logo.png';
  /* images: any[] = [
    'adam.png',
    'ben.png',
    'hieu.png',
    'max.png',
    'mike.png',
    'perry.png'
  ]; */
  imageUrl: string;

  constructor() {
    //let randomIndex = Math.floor(Math.random() * (this.images.length - 1));
    //this.source = `assets/img/${this.images[randomIndex]}`;

  }
}
