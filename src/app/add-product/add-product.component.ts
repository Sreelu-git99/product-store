import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
  showLoader: boolean = true;
  pro: any;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      title : ["", Validators.required],
      imageUrl : ["", Validators.required],
      description : ["", Validators.required],
    });
  }

  onSubmit()
  {
    console.log('Success', this.addProductForm.value);
    this.productService.submitForm(this.addProductForm.value).subscribe((res) => console.log('Success!', res),
    error => console.error('Error!', error)
    );
    
    this.router.navigate(['/']);
    this.productService.getProducts().subscribe(res => {
      this.pro = res;

      if(res)
      {
        this.showLoader = false;
        console.log(res);
      }
    });
  }
  }
  


