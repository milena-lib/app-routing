import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-multi-form',
  templateUrl: './multi-form.component.html',
  styleUrls: ['./multi-form.component.css']
})
export class MultiFormComponent implements OnInit {
  
  productCards = [
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

  currentFormContent: Array<any>;

  submitted = false;

  cardsForm: FormGroup;

  get cards(): FormArray {
    return this.cardsForm.get('cards') as FormArray;
  }


  constructor(private readonly formBuilder: FormBuilder) {
    this.cardsForm = this.formBuilder.group({
      cards: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.productCards.forEach(item => {
      this.cards.push(this.newCard(item));
      
    });
    console.log("cards: ", this.cards);
  }

  newCard(item): FormGroup {
    return this.formBuilder.group({
      email: ['', Validators.required],
      phone: ['', Validators.required],
      productName: item.productName
    })
    
  }

  onFormSubmit(card, index) {
    debugger;
    this.submitted = true;
    
    console.log("card: ", card);
    console.log("index: ", index);
    console.log("cardsForm value: ", this.cardsForm.controls[index]);
  }

}
