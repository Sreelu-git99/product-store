import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: any, searchTerm: any): any {
    if(searchTerm === undefined)
    {
      return products;
    }
    return products.filter(function(product) {
      return product.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }

}
