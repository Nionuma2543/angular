import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ws';
  constructor(private http : HttpClient){
   // this.getLandmark();
    // console.log('Start');
    // let url = 'http://localhost:80/webapi/landmark';
    // let obs =  this.http.get(url).subscribe((data:any) =>{
    //     console.log(data[0]);
    //     console.log('Complete');

    // });

    // console.log('Continue');
    // setTimeout(() =>{
    //   obs.unsubscribe();
    //   console.log("Unsubscribrd");
    // }, 2500);
  }

  async getLandmark(){
    console.log('Star');
    let url = 'http://localhost:80/webapi/landmark';
    let data : any = await lastValueFrom(this.http.get(url));
    console.log('Complete');
    console.log(data[0]);

    console.log('Continue');

  }

}





