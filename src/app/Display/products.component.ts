import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../server/apiservice.service';
import { Product } from '../models/product';
import { JsonPipe } from '@angular/common';
import { Router } from "@angular/router";  

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:Product[]=[];

  constructor(private _myAPIService:ApiserviceService,private router: Router) { }

  ngOnInit(): void {

    this._myAPIService.getAll().subscribe((data:Product[])=>
    {
      
      this.products=data;
      //console.log("products="+JSON.stringify(this.products));
      console.log(this.products);
    })

  }

  deleteEmp(product: Product): void {  
    
    this._myAPIService.delete(product.productId)  
      .subscribe(data => {  
        this.products = this.products.filter(u => u !== product);  
      })  
  }  
  editEmp(product: Product): void {  
    console.log("product="+product.productId);
    localStorage.removeItem('editEmpId');  
    localStorage.setItem('editEmpId', product.productId.toString());  
    this.router.navigate(['create']);  
  }  

  create():void
  {
    localStorage.removeItem('editEmpId');
    this.router.navigate(['create']);
  }
}
