import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product, ProductUpload } from '../product'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {

  product: ProductUpload = {
    maker: '',
    model: '',
    id: 0,
    price: 0,
    image: undefined,
    description: '',
    otherInfo: '',
    type: '',
    subtype: ''
  }




  productTypes = [
    {
      id:"Hand Gun",
      label: "All Hand Guns",
      subtypes: ["Semi Automatic", "Revolver"],
    },
    {
      id:"Long Gun",
      label: "All Long Guns",
      subtypes: ["Rifle", "Shotgun"],
    },
    {
      id:"Other",
      label: "Other",
      subtypes: ["Ammunition", "Accessory", "Part"],
    },
  ]

  typeControl = new FormControl(this.productTypes [0].subtypes [0]);

  constructor(private productService: ProductService) { }

  addProduct(){
    this.product.subtype = this.typeControl.value;
    this.productTypes.forEach((productType: any) => {
      if (productType.subtypes.includes(this.product.subtype)){
        this.product.type = productType.id;
      }
    })
    this.productService.createProduct(this.product);
  }

  typeSelection(event: any){
    console.log(event);
  }

  ngOnInit(): void {
  }

}
