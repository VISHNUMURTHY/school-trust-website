import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  slides = [
    {
      //url: '/../assets/img/test.png'
      url: '',
      isVideo: undefined
    },
    {
      //url: '/../assets/videos/sample/file_example_MP4_640_3MG.mp4'
      url: '',
      isVideo: undefined
    }
  ]
  count = 0;

  constructor() { }

  ngOnInit(): void {

  }

  isVideo(url: string): boolean {
    console.log('url', url);
    if (url.startsWith('data:video/')) {
      return true;
    }
    return false;
  }

  onFileChange($event) {
    if ($event.target.files[0] && $event.target.files && $event.target.files[0].tyle !== null) {
      let file = $event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (event) => {
        let result = event.target.result as string;
        console.log('result', result);
        if (this.slides[this.count].url === '') {
          this.slides[this.count].url = result;
        }
        if (this.slides[this.count].url.startsWith('data:video/')) {
          this.slides[this.count++].isVideo = true;
        }else{
          this.slides[this.count++].isVideo = false;
        }
      }
    }
  }
}
