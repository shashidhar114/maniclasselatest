import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() cMessage:string="Default Message";
  public childMessage="Message from child using view child";

  constructor() { }

  ngOnInit(): void {
  }

  public maths(){
    return "Maths calc from child component"+(5+6);
  }

}
