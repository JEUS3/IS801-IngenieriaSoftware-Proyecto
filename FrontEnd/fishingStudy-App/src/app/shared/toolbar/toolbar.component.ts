import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Option } from '../../interfaces/option.model';
import { Observable } from 'rxjs';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  // Declare height and width variables
  scrHeight:number=0;
  scrWidth:number=0;
  
  options: Option[] =[];
  
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?:any) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
    console.log(this.scrHeight, this.scrWidth);
}

  constructor( private readonly themeService:ThemeService) { 
    this.getScreenSize();

  }

  ngOnInit(): void {
    this.themeService.getThemeOptions()
      .subscribe(resp => {
        console.log(resp);
        this.options=resp;
      })
  }
  changeTheme(theme:string){
    this.themeService.setTheme(theme);
  }

  smooth(section:string){
    document.getElementById(section)?.scrollIntoView({block: "start", behavior: "smooth"});
  }

}
