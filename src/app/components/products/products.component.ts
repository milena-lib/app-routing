import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    {
      productName: "phone",
      email: 'milena@gmail.com',
      phone: '054-4739540'
    },
    {
      productName: "netflix",
      email: null,
      phone: null
    },
    {
      productName: 'tv',
      email: null,
      phone: null
    },
    {
      productName: 'fiber',
      email: 'yan@gmail.com',
      phone: '054-8358389'
    },
    {
      productName: 'tv',
      email: null,
      phone: null
    }
  ];

  @ViewChildren("inp") inpCntrl: QueryList<ElementRef>;
  @ViewChildren("msg") msgCntrl: QueryList<ElementRef>;

  fg: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.fg = this.formBuilder.group({
        address: this.formBuilder.group({
        street: ['', Validators.required],
      }),
      aliases: this.formBuilder.array([])
    });
    // const fa = (this.fg.get('aliases')as FormArray);
    // this.addNewAlias();
    this.buildAliases();
  }

  buildAliases() {
    const fa = (this.fg.get('aliases')as FormArray);
    this.products.forEach(element => {
      fa.push(this.formBuilder.group({
        name: ['', Validators.required]
      }));
    });
  }

  // addNewAlias(){
  //   const fa = (this.fg.get('aliases')as FormArray);
    
  //   fa.push(this.formBuilder.group({
  //     name: ['', Validators.required]
  //   }));
  // }
  // deleteAlias(i:number){
  //   const fa = (this.fg.get('aliases')as FormArray);
  //   fa.removeAt(i);
  //   if(fa.length===0){
  //     this.addNewAlias();
  //   }
  // }

  onSubmit() {
    this.isSubmitted = true;
    
    if(this.fg?.valid) {
      console.log("form is valid");
    }else {
      console.log("form is not valid");
    }

  }

  getInputs() {
    console.log("inputs: ", this.inpCntrl.toArray());

    let arrInp = this.inpCntrl.toArray();
    let arrMsg = this.msgCntrl.toArray();
    arrInp.forEach((element, index) => {
      console.log(element.nativeElement.value);
      if(!element.nativeElement.value){
        arrMsg[index].nativeElement.innerText = "empty";
      }
    });

    
    // arrMsg.forEach(element => {
    //   element.nativeElement.innerText = "sdcsdvc";
    // });
  }

}
