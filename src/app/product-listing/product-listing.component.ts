import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouterEvent } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  products:any = [];
  prod:any = [];
  showLoader: boolean = true;
  confirmDelete: boolean = false;
  // filteredProducts: products: any;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.products = res;

      if(res)
      {
        this.showLoader = false;
        console.log(res);
      }
    }, err => {
      console.log(err)
    });

    return this.products;

  }

  onDelete(id)
  {

      // console.log(id);
  
    this.productService.deleteProduct(id).subscribe(() => {console.log(`Product deleted with id 
    = ${id}`),
    this.productService.getProducts().subscribe(res => {
      this.products = res;

      if(res)
      {
        this.showLoader = false;
        console.log(res);
      }
      else
      {
        this.showLoader = true;
      }

    });
  },
    (err) => console.log(err));

  }

}
