import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GunshowsComponent } from './gunshows/gunshows.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FooterComponent } from './footer/footer.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RequestToPurchaseDialogComponent } from './request-to-purchase-dialog/request-to-purchase-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { NewAnnouncementComponent } from './new-announcement/new-announcement.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { MatInput, MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatButton, MatButtonModule} from '@angular/material/button';
import { AddNewAnnouncementComponent } from './add-new-announcement/add-new-announcement.component';
import { AddNewGunshowComponent } from './add-new-gunshow/add-new-gunshow.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { PoliciesComponent } from './policies/policies.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule} from '@angular/material/menu';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    ProductDetailComponent,
    NavbarComponent,
    GunshowsComponent,
    AboutComponent,
    FooterComponent,
    SingleProductComponent,
    RequestToPurchaseDialogComponent,
    NewAnnouncementComponent,
    AddNewProductComponent,
    AddNewAnnouncementComponent,
    AddNewGunshowComponent,
    ProductImageComponent,
    PoliciesComponent,
    CarouselComponent,
    ProductFilterPipe,
    SignInComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatTableModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
    MatDividerModule,
    MatMenuModule,
    MatSnackBarModule,
    MaterialFileInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
