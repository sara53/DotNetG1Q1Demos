import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.productId);
  }
}
