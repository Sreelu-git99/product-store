import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
product: any = null;
showLoader: boolean = true;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.productService.getProductDetails(params.id).subscribe(res =>{
        this.product = res;

        if(res)
        {
          this.showLoader = false;
          console.log(res);
        }
      });
    });
  }

}
