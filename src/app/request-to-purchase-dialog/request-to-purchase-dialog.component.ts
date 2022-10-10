import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-request-to-purchase-dialog',
  templateUrl: './request-to-purchase-dialog.component.html',
  styleUrls: ['./request-to-purchase-dialog.component.scss']
})
export class RequestToPurchaseDialogComponent implements OnInit {

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
