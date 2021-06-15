import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from '../interfaces/option.model';
import { StyleMaganerService } from './style-maganer.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor( private http:HttpClient,
               private styleManagerService:StyleMaganerService) { }

  getThemeOptions(): Observable<Option[]>{
    return this.http.get<Option[]>("assets/options.json")
  }
  setTheme(themeToSet:string) {
    console.log(themeToSet)
    this.styleManagerService.setStyle(
      "theme",
      `../node_modules/@angular/material/prebuilt-themes/${themeToSet}.css`
    )
  }
}
