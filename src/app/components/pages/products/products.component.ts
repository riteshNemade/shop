import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product,Products } from 'src/app/models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  category: string = "";
  result: Product[]=[];
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    //fetch route params
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category') || 'Products';
    })
    //if default category show all prods
    if (this.category === "Products") {
      this.productService.getProducts().subscribe((data: Products) => {
        this.result = data.products;
        console.log(data);
      });
    }else{
      this.productService.getProductsByCategory(this.category).subscribe((data: Products)=>{
        this.result = data.products;
        console.log(this.result)
      })
    }
  }

}
