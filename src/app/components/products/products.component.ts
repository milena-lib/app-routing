import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
