import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //apiEndpoint = 'http://localhost/webapi'; 
  apiEndpoint = 'https://wag6.bowlab.net/webapi'; 
  countries:any;
  selectedLandmark:any;
  constructor() { }
}
