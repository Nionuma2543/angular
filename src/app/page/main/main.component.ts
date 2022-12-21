import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Convert as landmarkCvt, Landmark } from 'src/app/model/landmark.model';
import { Convert as countryCvt, Country } from 'src/app/model/country.model';
import { DataService } from 'src/app/service/data.service';
import { MatListOption } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  landmarks = Array<Landmark>();
  countries = Array<Country>();

  selectedLandmark : any;

  constructor(private dataService : DataService, private http : HttpClient){
    http.get(dataService.apiEndpoint + "/landmark").subscribe((data : any) =>{
      this.landmarks = landmarkCvt.toLandmark(JSON.stringify(data));
      console.log(this.landmarks);
  });
  http.get(dataService.apiEndpoint + "/country").subscribe((data : any) =>{
    this.countries = countryCvt.toCountry(JSON.stringify(data));
    console.log(this.countries);
  });
}
  show(option: MatListOption){
    this.selectedLandmark = option.value;
    console.log(this.selectedLandmark);
  }
}
