import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  imageObject: Array<object> = [
    {
      image: 'assets/img-1.jpg',
      thumbImage: 'assets/img-1.jpg',
      alt: 'Image 1',
      title: 'Image 1',
    },
    {
      image: 'assets/img-2.jpeg',
      thumbImage: 'assets/img-2.jpeg',
      alt: 'Image 2',
      title: 'Image 2',
    },
    {
      image: 'assets/img-3.jpeg',
      thumbImage: 'assets/img-3.jpeg',
      alt: 'Image 3',
      title: 'Image 3',
    },
    {
      image: 'assets/img-5.jpg',
      thumbImage: 'assets/img-5.jpg',
      alt: 'Image 4',
      title: 'Image 4',
    },
    {
      image: 'assets/h1.jpg',
      thumbImage: 'assets/h1.jpg',
      alt: 'Image 5',
      title: 'Image 5',
    },
    {
      image: 'assets/main-home-image.jpg',
      thumbImage: 'assets/main-home-image.jpg',
      alt: 'Image 6',
      title: 'Image 6',
    },
  ];
}
