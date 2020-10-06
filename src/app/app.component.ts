import { Component } from '@angular/core';
import { BasePageComponent } from './shared/base-page/base-page.component';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BasePageComponent {
  title = 'app-routing';

  productList = [
    { id: 4, name: 'Laptop', rating: 3 },
    { id: 5, name: 'Phone', rating: 4 },
    { id: 6, name: 'Mice', rating: 4 },
  ];

  userData: any;

  constructor(private userSrv: DataService) {
    super();
  }

  ngOnInit(){
    console.log("temp from app: ", this.temp);
    this.subscriptions.push(
      this.userSrv.getUsers2Data()
      .subscribe(data => {
        this.userData = data;
        // debugger;
      })
    );

    console.log("foo1 returns:");
    console.log(this.foo1());
    console.log("foo2 returns:");
    console.log(this.foo2());
  }

  foo1()
  {
    return {
        bar: "hello"
    };
  }

  foo2()
  {
    return
    {
        bar: "hello"
    };
  }
}
