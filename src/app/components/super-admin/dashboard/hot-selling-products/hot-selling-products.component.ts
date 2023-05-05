import { Component, OnInit } from '@angular/core';
import * as productData from '../../../../shared/data/components/dashboard/ecommerce'
@Component({
  selector: 'app-hot-selling-products',
  templateUrl: './hot-selling-products.component.html',
  styleUrls: ['./hot-selling-products.component.scss']
})
export class HotSellingProductsComponent implements OnInit {

  // data
  public HotSellingProducts = productData.HotSellingProducts;

  constructor() {
   }
  
  ngOnInit(): void {
  }
 

}
