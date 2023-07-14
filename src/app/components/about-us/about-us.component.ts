import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

 
  public gotId:any;
  public dateObj:any= new Date();

  constructor(private activateRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.gotId=this.activateRoute.snapshot.paramMap.get("id")
  
  }

  GoToHomePage(){
    this.route.navigateByUrl("/home");
  }

}
