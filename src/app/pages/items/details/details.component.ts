import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number;
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute){
      this.routeSubscription = route.parent.params.subscribe(params=>{
        this.id= params['id'];
        debugger;
      });
    //this.id = this.route.snapshot.params.id;
  }


  ngOnInit(): void {
    debugger;
  }

}
