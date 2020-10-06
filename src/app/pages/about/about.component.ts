import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data.service';
import { BasePageComponent } from 'src/app/shared/base-page/base-page.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [DataService]
})
export class AboutComponent extends BasePageComponent implements OnInit {
  userData: any;
  
  constructor(private userSrv: DataService) { 
    super();
    
  }

  ngOnInit(): void {
    console.log("temp: ", this.temp);
    
    this.subscriptions.push(
      this.userSrv.getUsers1Data()
      .subscribe(data => {
        this.userData = data;
        // debugger;
      })
    );
    
  }

}
