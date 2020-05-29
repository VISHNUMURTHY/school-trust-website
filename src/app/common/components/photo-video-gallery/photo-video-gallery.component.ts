import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-video-gallery',
  templateUrl: './photo-video-gallery.component.html',
  styleUrls: ['./photo-video-gallery.component.scss']
})
export class PhotoVideoGalleryComponent implements OnInit {

  imageList: any[] = [{ 'src': '../../../../assets/img/test.png', 'description': '../../../../assets/img/test.png' },
  { 'src': '../../../../assets/img/test.png', 'description': '../../../../assets/img/test.png' }];
  videoList: any[] = [{ 'src': '../../../../assets/videos/sample/file_example_MP4_480_1_5MG.mp4', 'description': '../../../../assets/img/test.png' },
  { 'src': '../../../../assets/videos/sample/file_example_MP4_480_1_5MG.mp4', 'description': '../../../../assets/img/test.png' }]
  isVideo: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.includes('photo-gallery')) {
      this.isVideo = false;
    } else {
      this.isVideo = true;
    }
  }

}
