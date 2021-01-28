import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [ProductListComponent, SingleProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ]
})
export class ProductModule { }
