import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
