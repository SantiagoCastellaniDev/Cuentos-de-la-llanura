import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bibliografia',
  templateUrl: './bibliografia.component.html',
  styleUrls: ['./bibliografia.component.css']
})
export class BibliografiaComponent implements OnInit {


  aparece:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  change(){
    this.aparece=!this.aparece;
  }

}
