import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import {orderHistory} from '../../../shared/interface/order';
import {OrderHistoryDirective, SortEvent} from '../../../shared/directive/order-history.directive';
import { OrderHistoryService } from 'src/app/shared/services/product/order-history.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  orders$: Observable<orderHistory[]>;
  total$: Observable<number>;

  @ViewChildren(OrderHistoryDirective) headers: QueryList<OrderHistoryDirective>;

  constructor(public service: OrderHistoryService) {
    this.orders$ = service.orders$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
  ngOnInit(): void {
  }

}
