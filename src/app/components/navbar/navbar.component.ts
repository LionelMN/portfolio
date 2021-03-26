import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isScrolled :boolean = false;
    @HostListener('window:scroll', ['$event'])
    onScroll(event) {
      if(window.pageYOffset > 100){
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }
  constructor() { }

  ngOnInit(): void {
  }

}
