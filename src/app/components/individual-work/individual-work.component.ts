import { Component, Input, OnInit, ViewEncapsulation  } from '@angular/core';
import { WorksI } from '../../interfaces/works-i';

@Component({
  selector: 'app-individual-work',
  templateUrl: './individual-work.component.html',
  styleUrls: ['./individual-work.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class IndividualWorkComponent implements OnInit {

  constructor() { }

  selectedImg :string;

  @Input()
  workRecived : WorksI;

  ngOnInit(): void {
  }

  selectImg(img : string) :void{
    this.selectedImg = img;
  }

  desSelectImg() : void{
    this.selectedImg = ""
  }

}
