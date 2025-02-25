import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  imports: [ProductComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  product: { id: number; name: string; price: number } = {
    id: 1,
    name: 'Book',
    price: 200,
  };
  getOffer() {
    //this.product.price = 100;
    this.product = { ...this.product, price: 100 };
  }
}
