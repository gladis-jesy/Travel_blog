import { Injectable } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import {CHINA_DATA } from 'src/app/shared/constant/urls/url-travel-china/china_data'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ChinaTravelService {
  // private apiUrl = "http://localhost:3001/api/Travel_blog/";
  constructor(private apiService:ApiService,private http: HttpClient) { }

  getdataTravelChina() {
    const url = `${CHINA_DATA}`;
    return this.apiService.get(url);
}
}
