import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../../components/slider/slider.component';
import { vineyardssliderComponent } from "../../components/vineyardsslider/vineyardsslider.component";

@Component({
  selector: 'app-vineyard',
  standalone: true,
  imports: [CommonModule, SliderComponent, vineyardssliderComponent],
  templateUrl: './vineyard.component.html',
  styleUrl: './vineyard.component.scss'
})
export class VineyardComponent  {
    @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  
  videoSource = 'assets/Snapinst.app_video_AQMYJ8FP4ElZIRQ2ZzfkiwjxUjuLkas-2d3OogVW94v9hiET3CjKpmuysgcg6ji3fVRHhROoJd1cxwCPxbe1JcILKBL5YQfFn797Bpg.mp4';

  ngAfterViewInit() {
    if (this.videoPlayer) {
      const video = this.videoPlayer.nativeElement;
      video.muted = true; // uech muted unda iyos
      video.play().catch(error => {
        document.addEventListener('click', () => {
          video.play();
        }, { once: true });
      });
    }
  }
}
