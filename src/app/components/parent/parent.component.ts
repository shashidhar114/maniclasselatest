import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent) childobject: any;
  public pMessage: string = "This Message is from Parent Component";
  public msg: string = "";
  public matscalc: string = "";


  constructor() { 

    console.log("constructor from parent")
  }

  ngOnInit(): void {
 console.log("ngoninit from parent ")
  }
  ngAfterViewInIt() {
    setTimeout(() => {
      this.msg = this.childobject.childMessage;
      this.matscalc = this.childobject.maths();

    });

  }

}

