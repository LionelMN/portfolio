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
    },
    {
      id: 2,
      title: 'Dev&Des',
      previewInfo: 'An aplication created to connect people of differents roles focused on the development of games, webs, aplications.',
      repository1:'https://github.com/LionelMN/Dev-DesFrontent',
      repository2:'https://github.com/LionelMN/De-DeBack',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu pellentesque lorem. Pellentesque nec libero tellus. Nullam pretium varius nibh vitae mattis. In aliquet enim in tortor mollis mollis. Sed aliquet pellentesque vulputate. Pellentesque sit amet posuere metus. Morbi ac nunc ipsum. Integer imperdiet sem quis sagittis ornare. Duis a odio sit amet nisl sollicitudin ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin non erat ut odio hendrerit ullamcorper. Curabitur in scelerisque erat. Sed volutpat tortor urna, nec viverra sem pulvinar et. Nulla venenatis leo quis lacus efficitur aliquam. In sed aliquam dui. Etiam eu ipsum quis tellus aliquet finibus. Suspendisse in lacus eget erat feugiat maximus. Etiam tortor nunc, iaculis ut varius et, consectetur at mauris. Mauris ut hendrerit lacus. In volutpat mauris metus, sed accumsan massa tincidunt id. Sed cursus id leo posuere convallis. Quisque vel commodo felis. Praesent sed libero et dolor ultrices gravida. Sed eu risus a leo vehicula mattis. Morbi sit amet sapien faucibus, mollis nisi accumsan, molestie neque.',
      imgs:[
        'dev-des-landing',
        'dev-des-create',
        'dev-des-login',
        'dev-des-home'
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
