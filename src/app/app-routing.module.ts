import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GunshowsComponent } from './gunshows/gunshows.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { AddNewAnnouncementComponent } from './add-new-announcement/add-new-announcement.component';
import { AddNewGunshowComponent } from './add-new-gunshow/add-new-gunshow.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { PoliciesComponent } from './policies/policies.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  { path: 'products/:search', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'gunshows', component: GunshowsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'single-product/:productId', component: SingleProductComponent },
  { path: 'add-new-product', component: AddNewProductComponent },
  { path: 'add-new-announcement', component: AddNewAnnouncementComponent },
  { path: 'add-new-gunshow', component: AddNewGunshowComponent },
  { path: 'product-image', component: ProductImageComponent },
  { path: 'policies', component: PoliciesComponent},
  { path: 'sign-in', component: SignInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
