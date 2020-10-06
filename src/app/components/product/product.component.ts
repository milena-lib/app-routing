import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: any = null;

  productForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { 
    this.productForm = this.fb.group({
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onFormSubmit() {
    this.submitted = true;
  }
}
