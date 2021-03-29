import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WorksI } from '../../interfaces/works-i';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  worksList : WorksI[] = [
    {
      id: 1,
      title: 'MEAN To do list',
      previewInfo: 'Responsive multiuser to do list built with MongoDB, Express, Angular and Node. Designed and developed by me',
      repository1:'https://github.com/LionelMN/todolist-angular',
      repository2:'https://github.com/LionelMN/todolist-back',
      imgs:[
        'todolist.PNG',
        'register.PNG',
        'login.PNG',
      ]
    },
    {
      id: 2,
      title: 'Dev&Des',
      previewInfo: 'An aplication created to connect people of differents roles focused on the development of games, webs, aplications.',
      repository1:'https://github.com/LionelMN/Dev-DesFrontent',
      repository2:'https://github.com/LionelMN/De-DeBack',
      info: '<p>The final project of the EOI FullStack bootcamp. This project was made with <a href="https://github.com/amaryan" target="_blank" class="work__text-link">Ágora Martin Muñoz</a>, <a href="https://github.com/LauraMSM" target="_blank" class="work__text-link">Laura Sarmiento Melián</a>, <a href="https://github.com/GiovaMederos" target="_blank" class="work__text-link">Giova Mederos</a> and <a href="https://github.com/yerayjimenezc" target="_blank" class="work__text-link">Yeray Jiménez Carmona</a> in order to to connect people of differents roles focused on the development of games, webs, aplications. I was in charged to operated the backend and the production on Amazon Web Services but I also connect the frontend with the backend. The frontend was developed on Angular 9 and the backend on Node.js, Express and the database on Mongo DB. Also this project has a inner chat with the real time databases od Firebase.</p>',
      imgs:[
        'dev-des-landing.PNG',
        'dev-des-create.PNG',
        'dev-des-login.PNG',
        'dev-des-home.PNG'
      ]
    },
  ]

  @Output()
  workShared : EventEmitter<WorksI> = new EventEmitter<WorksI>()

  constructor() { }

  ngOnInit(): void {
  }

  onSendWork(work:WorksI){
    this.workShared.emit(work)
  }

}
