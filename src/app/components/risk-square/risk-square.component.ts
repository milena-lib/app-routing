import { Component, OnInit } from '@angular/core';

export class RiskModel{
    RiskName:string;
    CF:number;
    PF:Number;
}
export class SquareModel{
  RiskName:string;
  // CF:number;
  // PF:Number;
  AxisCF:number;
  AxisPF:Number;
  RiskText:string;
  RiskClass:string;
}






@Component({
  selector: 'app-risk-square',
  templateUrl: './risk-square.component.html',
  styleUrls: ['./risk-square.component.css']
})
export class RiskSquareComponent implements OnInit {

  risklist:RiskModel[]=[
    {RiskName:"Non-compliance with the shedule", CF:2, PF:3 },
    {RiskName:"subcontractors not available ", CF:1, PF:5 },
    {RiskName:"software updates", CF:4, PF:4 },
    {RiskName:"Development team unavalability", CF:5, PF:2 },
    {RiskName:"Covid-19", CF:3, PF:2 },
    {RiskName:"Problem proven ability", CF:1, PF:5 },
    {RiskName:"Subcontractors with corona", CF:5, PF:2 },
  ]
 squareLength:number=6;
 axixIndex :number;
 riskSquareArray;
  constructor() { }

  ngOnInit(): void {
    this.axixIndex = Math.round(this.squareLength/2)  ;
    console.log("this.axixIndex", )
    this.fillSquare();
  }

    fillSquare()
  {
    this.riskSquareArray = [];
    
    for (let i = 0;  i< this.squareLength; i++){
      this.riskSquareArray[i] = new Array<SquareModel>();
      for (let j = 0;  j< this.squareLength; j++){
        const axisCF = this.squareLength  - 1 -i;
        const axisPF =  j ;
        const risk: RiskModel[] = this.risklist.filter(item=>item.CF == axisCF && item.PF == axisPF);
        const riskText = this.getText(axisCF, axisPF, risk);
        const riskClass = this.getClassColor(axisCF, axisPF, risk);
        let  riskName =   this.getRiskName(risk);


        let item :SquareModel =  {RiskName: riskName, RiskText:riskText, RiskClass: riskClass, AxisCF:axisCF, AxisPF:axisPF } ;
        this.riskSquareArray[i][j] = item;
      }

 
    }
   console.log(this.riskSquareArray);
   
  }
  getText(i:number, j:number, risk: RiskModel[]) : string{
    let res = "";
    if (j == 0)
    {
      if (i == 3)
      res = "PF";
    }
    else 
      if (i == 0){
        if (j == 3)
        res = "CF";
      }
      else{
        if (risk.length > 0){
          const sum = risk.reduce(function(prev, cur) {
            return prev + cur.CF;
          }, 0);
          res = sum.toString();
        }
      
    }
    

    return res;
  }
  getClassColor(i:number, j:number, risk: RiskModel[]):string{
    let res = "";
 
    const isRiskExist: boolean = risk.length > 0;
    if (j == 0)
    {

        res = i != 3? "hidden": "gray";
    }else if (i == 0){
      res = j != 3? "hidden": "gray";
    }
    else{
      const pow = i * j;
      if (pow < 5){
        res = isRiskExist? "green": "green-light";
      }
      else if (pow >=5 && pow < 13) {
        res = isRiskExist? "yellow": "yellow-light";
      }
      else{
        res = isRiskExist? "red": "red-light";
      }
    }
    
    return res;
  }
  getRiskName(risk: RiskModel[]) : string{
    let res = "";
    if(risk.length > 0){
      let names = risk.map(item => item.RiskName);
      res = names.join(', ')
    }
    return res;
  }
  counter(i: number) {
    return new Array(i);
}

}
