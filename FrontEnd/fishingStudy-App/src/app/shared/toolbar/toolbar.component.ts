import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Option } from '../../interfaces/option.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  options: Option[] =[];
  constructor( private readonly themeService:ThemeService) { }

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

}
