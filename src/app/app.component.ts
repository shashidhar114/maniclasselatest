import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'batch-22';



  public name:string = "Shashi";
  public firstName:string="kumar";
  public age:number = 28;
  public id:number = 12;
  public color: string ="";
  public userlist:any =[
    {userId:1, username:"shashi", age:9},
    {userId:1, username:"Abi", age:30},
    {userId:1, username:"shiva reddy", age:16},
    {userId:1, username:"hari", age:40},
  ]
  public bgClass:string="bg-grey";
  public classList:any=["color-white","bg-grey"]
  public classObject:any={
    "bg-red":true,
    "color-white":true
  }



  
  public changeTheName(){
    this.name ="<b>Shashidhar</b>"  
    this.bgClass="bg-red"
  }
  public getFirstName(){
    console.log(this.firstName)
  }

}



