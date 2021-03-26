import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  servicesList : {serviceName:string, serviceMotto: string, serviceImage:string, imageOwner:string}[] = [
    {serviceName: 'Design', serviceMotto: 'I can provide a full design experience', serviceImage: 'sketch', imageOwner: 'Freepik'},
    {serviceName: 'Code', serviceMotto: 'Whatever you think I can make it real', serviceImage: 'data', imageOwner: 'Freepik'},
    {serviceName: 'Launch', serviceMotto: 'Put your site where it belongs. On Internet!', serviceImage: 'startup', imageOwner: 'monkik'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
