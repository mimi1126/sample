import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from "./shared/product.service";

const routes: Routes = [
  {
    path: 'product',
    children: [
      {path: '', component: ProductListComponent},
      {path: 'detail/:id', component: ProductDetailComponent}
    ]
  }
];


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
