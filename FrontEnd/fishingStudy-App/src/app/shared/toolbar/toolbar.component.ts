import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Option } from '../../interfaces/option.model';
import { Observable } from 'rxjs';
import { HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


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

  constructor( private readonly themeService:ThemeService, private route: ActivatedRoute) { 
    this.getScreenSize();

  }

  ngOnInit(): void {
    this.themeService.getThemeOptions()
      .subscribe(resp => {
        console.log(resp);
        this.options=resp;
      })
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f)
      if (element){
        element.scrollIntoView();
      }
    })
  }
  changeTheme(theme:string){
    this.themeService.setTheme(theme);
  }



}
