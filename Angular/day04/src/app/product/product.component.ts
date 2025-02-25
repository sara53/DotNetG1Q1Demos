import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnChanges, OnInit, OnDestroy {
  ngOnDestroy(): void {
    console.log('On Destroy');
  }
  ngOnInit(): void {
    console.log('On Init');
  }
  previousValue: any;
  flag: boolean = false;
  @Input({ required: true }) myProduct!: {
    id: number;
    name: string;
    price: number;
  };

  @Input() trackName!: string;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    if (!changes['myProduct'].firstChange) {
      this.flag = true;
      this.previousValue = changes['myProduct'].previousValue;
    }
  }
}
