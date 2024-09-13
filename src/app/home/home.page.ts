import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
lang : any = 'AR'
showMenue : boolean = false;
container :any = ''
  constructor() { 
     
  }

  ionViewDidEnter(){
  //   this.container = document.getElementById('scribbleContainer');

  // window.addEventListener('click', () => {
  //   console.log('start code')
  //   this.container.innerHTML = '';
  //   this.init();
  // });
}


  ngOnInit() {

  }

  

     createScribble() {
        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("class", "scribble");
        svg.setAttribute("width", '500px'); //window.innerWidth
        svg.setAttribute("height", '1000px');  //window.innerHeight
    
        const path = document.createElementNS(svgNS, "path");
        const d = this.generateRandomPath();
        path.setAttribute("d", d);
        path.setAttribute("fill", 'gray');
        path.setAttribute("stroke-width", '1');
        svg.appendChild(path);
        this.container.appendChild(svg);
    }
    
     generateRandomPath() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        let d = `M${Math.random() * width},${Math.random() * height}`;
        for (let i = 0; i < 10; i++) {
            d += `Q${Math.random() * width},${Math.random() * height} ${Math.random() * width},${Math.random() * height}`;
        }
        return d;
    }
    
     init() {
        for (let i = 0; i < 20; i++) {
            this.createScribble();
        }
    }
    
    
    
   





  menue(){
    this.showMenue = true 
  }

  closeMenue(){
    this.showMenue = false
  }

  changeLang(){
    if(this.lang == 'AR'){
      this.lang = 'EN'
    }else{
      this.lang = 'AR'
    }
  }


}
