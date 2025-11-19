import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: true,
  template: `
    <video
      src="assets/Snapinst.app_video_AQMYJ8FP4ElZIRQ2ZzfkiwjxUjuLkas-2d3OogVW94v9hiET3CjKpmuysgcg6ji3fVRHhROoJd1cxwCPxbe1JcILKBL5YQfFn797Bpg.mp4"
      autoplay
      muted
      playsinline
      loop
      style="width: 100%; height: auto; object-fit: cover;"
    ></video>
  `
})
export class VideoComponent {}
