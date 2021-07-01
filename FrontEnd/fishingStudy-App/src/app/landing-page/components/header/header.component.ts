import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  
  elOffset(seccionId:string){
    let el:HTMLElement|null = document.getElementById(seccionId);
    let rel:any = el?.getBoundingClientRect();
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rel.top + scrollTop
  }

  scrollingSmooth(seccionId:string){
    //document.getElementById(seccionId)?.scrollIntoView({behavior:"smooth"});
    scrollTo(0, this.elOffset(seccionId)-35);
  }
}
