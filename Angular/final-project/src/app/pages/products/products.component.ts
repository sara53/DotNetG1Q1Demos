import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product-service.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
}
