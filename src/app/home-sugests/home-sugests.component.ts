import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-sugests',
  templateUrl: './home-sugests.component.html',
  styleUrls: ['./home-sugests.component.css']
})
export class HomeSugestsComponent implements OnInit {

  @Input() type:string

  constructor() { }

  ngOnInit(): void {
  }

}
