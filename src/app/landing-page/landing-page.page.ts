
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {
  
  @ViewChild('pencilScribble') pencilScribble!: ElementRef;
  
  constructor() { 
   
    
  }

  ngOnInit() {
 
  }

    ionViewDidEnter() {  
      this.animateScribbles();

    }
animateScribbles() {
    const svg = this.pencilScribble.nativeElement;

    for (let i = 0; i < 100; i++) { // Increase the number of lines for a denser effect
      const startPoint = this.getRandomPoint();
      const endPoint = this.getRandomPoint();

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", `M ${startPoint.x} ${startPoint.y} L ${endPoint.x} ${endPoint.y}`);
      svg.appendChild(path);
    }
  }

  getRandomPoint() {
    const width = this.pencilScribble.nativeElement.clientWidth;
    const height = this.pencilScribble.nativeElement.clientHeight;

    return {
      x: Math.random() * width,
      y: Math.random() * height
    };
  }

    
  
   
 
}
