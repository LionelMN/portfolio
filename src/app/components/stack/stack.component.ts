import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css'],
})
export class StackComponent implements OnInit {

  stackList : {name:string, img:string}[] = [
    {name:"HTML5",img:"html5.svg"},
    {name:"CSS3",img:"css3.svg"},
    {name:"EC6",img:"logo-javascript.svg"},
    {name:"TypeScript",img:"typescript.svg"},
    {name:"Angular 9",img:"angular-icon-1.svg"},
    {name:"Node.js",img:"nodejs-1.svg"},
    {name:"Express",img:"express-109.svg"},
    {name:"PHP",img:"php-1.svg"},
    {name:"Laravel",img:"laravel-2.svg"},
    {name:"MariaDB",img:"mariadb.svg"},
    {name:"PostgreSQL",img:"postgresql.svg"},
    {name:"MongoDB",img:"mongodb-icon-1.svg"},
    {name:"AWS",img:"aws-2.svg"},
    {name:"Firebase",img:"firebase-1.svg"},
    {name:"Scrum",img:"scrumorg-1.svg"},
    {name:"Bash",img:"bash-1.svg"},
    {name:"Git",img:"git-icon.svg"},
    {name:"Docker",img:"docker.svg"},
  ]

  test = "test"

  constructor() { }

  ngOnInit(): void {
  }

}
