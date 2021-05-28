import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'))
    // this.product =
    const productObservable = this.productService.getProductById(id)
    productObservable.subscribe(
      (data) => {
        this.product = data
      },
      (err) => {
        console.error('something wrong occurred: ' + err)
      }
    )

  }

}
