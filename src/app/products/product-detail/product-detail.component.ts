import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  constructor() {
    this.product = {
      id: 0,
      price: 0,
      maker: '',
      model: '',
      description: '',
      image: '',
      type: '',
      subtype: '',

    }
   }

  ngOnInit(): void {
  }

}
