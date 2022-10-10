import { Expansion } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[]= [];
  mybutton: any;
  categoryControl = new UntypedFormControl('all');
  searchParams?: RegExp;

  constructor(productService: ProductService, private route: ActivatedRoute) {
    productService.getProducts().subscribe((products: Product[]) => {
      this.products= products
    })
  }

  ngOnInit(): void {
    this.mybutton = document.getElementById("myBtn");
    window.onscroll = ()=> {this.scrollFunction()};
    /* this.categoryControl.valueChanges.subscribe(category => {
    }) */
    /* const routeParams = this.route.snapshot.paramMap;
    this.searchParams = routeParams.get("search") ?? ""; */
    this.route.paramMap.subscribe(params => {
      const searchArg = params.get("search");
      this.searchParams = searchArg ? new RegExp(searchArg, 'gi') : undefined;
    })
  }


  // When the user scrolls down 20px from the top of the document, show the button


   scrollFunction(): void {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.mybutton.style.display = "block";
    } else {
      this.mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
