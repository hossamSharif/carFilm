import { Component, OnInit } from '@angular/core';
 
 
 
 
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.page.html',
  styleUrls: ['./practice.page.scss'],
})
export class PracticePage implements OnInit {


  obsarvable : Observable<string>;
  result : string = "";

  constructor() {
    this.obsarvable = of('data fe,t').pipe(
      map((data)=>{
        return data.toUpperCase()
      }) ,
      map((data)=>{
        return data.split(',').reverse().join('asd')
      })  
    )
 
    //promis


    this.testPromises().then(data=>{
      this.result = data
    }).catch(error=>{
      console.log(error)
    })
   }

  ngOnInit() {
  }


  testObservable(){
     this.obsarvable.subscribe((data)=>{
      console.log(data)
     })
  }

  testPromises():Promise<string>{
    return new Promise((resolve , reject)=>{ 
     setTimeout(()=>{
      resolve('data')
     },2000)
    })
  }
}
