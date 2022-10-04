import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { RequestToPurchaseDialogComponent } from '../request-to-purchase-dialog/request-to-purchase-dialog.component';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  @Input() product!: Product;

  otherInfoKeys! : string[];

  constructor(private route: ActivatedRoute, private productService: ProductService, public dialog: MatDialog) {}

  ngOnInit(): void {
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.productService.getProducts().subscribe((products: Product[]) => {
    this.product = products.find(product => product.id === productIdFromRoute) as Product;
    this.otherInfoKeys = Object.keys(this.product.otherInfo);
  })


  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RequestToPurchaseDialogComponent, {
      width: '40%',
      height: '40%'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }


}
