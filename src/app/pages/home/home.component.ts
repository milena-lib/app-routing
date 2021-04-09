import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userSrv: DataService) { 
    // debugger;
  }

  ngOnInit(): void {
    // debugger;
    this.userSrv.temp = "hello, routing!"
  }

}
