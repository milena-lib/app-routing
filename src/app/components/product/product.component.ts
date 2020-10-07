import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';

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
    
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.productForm = this.fb.group({
      email: [this.product.email, 
        this.conditionalEmailValidator()
        // this.conditionalValidator(
        //   (() => this.product.email),
        //   [
        //     Validators.required
            
        //   ]
        // )
      ],

      phone: [this.product.phone, 
        this.conditionalPhoneValidator()
        // this.conditionalValidator(
        //   (() => this.product.phone),
        //   Validators.required
        // )
      ]
    });
  }

  // conditionalValidator(condition: (() => boolean), validator: ValidatorFn): ValidatorFn {
  //   return (control: AbstractControl): {[key: string]: any} => {
  //     if (! condition()) {
  //       return null;
  //     }
  //     return validator(control);
  //   }
  // }

  conditionalEmailValidator(){
    if(this.product.email) {
      return [
          Validators.required, 
          Validators.maxLength(250),
          Validators.minLength(5),
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]
    }
    return null;
  }

  conditionalPhoneValidator(){
    if(this.product.phone) {
      return [
          Validators.required, 
          Validators.maxLength(12),
          Validators.minLength(9),
          // Validators.pattern("^[0-9]*$")
          // Validators.pattern("^[0][2|3|4|8|9]{1}[-]{0,1}[0-9]{7}$"),
          Validators.pattern("^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$"),
          // Validators.pattern("^[0][7][3|7]{1}[-]{0,1}[0-9]{7}$")
        ]
    }
    return null;
  }
  
  get email(){
    return this.productForm.get('email');
  }

  get phone(){
    return this.productForm.get('phone');
  }

  onFormSubmit() {
    this.submitted = true;
    console.log("form valid: ", this.productForm.valid);
  }
}
