import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, fromEvent, Subject } from "rxjs";
import { takeUntil, debounceTime } from "rxjs/operators";
import {AuthService} from "./auth/auth.service";

export interface Menu {
  headTitle1?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
}
@Injectable({
  providedIn: "root",
})
export class NavService {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

  // Search Box
  public search: boolean = false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Full screen
  public fullScreen: boolean = false;

  constructor(private router: Router, private auth:AuthService) {
    this.menuView()
    this.auth._role.next(this.auth.getUserRole())
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, "resize")
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
        }
        if (evt.target.innerWidth < 1199) {
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
      });
    }
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  private menuView(){
    this.auth.role.subscribe(next =>{
      if(!next) return
      if(next === "SuperAdmin"){
        this.MENUITEMS = [...this.SuperAdminMenu]
        this.items.next(this.MENUITEMS)
        return;
      }
      if(next === "Admin"){
        this.MENUITEMS = [...this.AdminMenu]
        this.items.next(this.MENUITEMS)
        return;
      }
      if(next === "Vendor"){
        this.MENUITEMS = [...this.VendorMenu]
        this.items.next(this.MENUITEMS)
        return;
      }
      if(next === "Sales"){
        this.MENUITEMS = [...this.SalesMenu]
        this.items.next(this.MENUITEMS)
        return;
      }
    })
  }

  VendorMenu: Menu[] = [
    { path: "/vendor/dashboard", icon: "home", title: "Dashboard", type: "link" },
    {
      title: "Product",
      icon: "gallery",
      type: "sub",
      active: false,
      children: [
        { path: "/vendor/product/create-product", title: "Add Product", type: "link" },
        { path: "/vendor/product/all-products", title: "All Products", type: "link" },
        { path: "/vendor/product/product-questions", title: "Product Questions", type: "link" },
      ],
    },
    {
      title: "Orders",
      icon: "page",
      type: "sub",
      active: false,
      children: [
        { path: "/vendor/orders/all-orders", title: "All Orders", type: "link" },
        { path: "/vendor/orders/pending-orders", title: "Pending Orders", type: "link" },
      ],
    },
  ];

  SalesMenu: Menu[] = [
    { path: "/sales/dashboard", icon: "home", title: "Dashboard", type: "link" },
    {
      title: "Product",
      icon: "gallery",
      type: "sub",
      active: false,
      children: [
        { path: "/sales/product/create-product", title: "Add Product", type: "link" },
        { path: "/sales/product/all-products", title: "All Products", type: "link" },
        { path: "/sales/product/product-questions", title: "Product Questions", type: "link" },
      ],
    },
    {
      title: "Orders",
      icon: "page",
      type: "sub",
      active: false,
      children: [
        { path: "/sales/orders/all-orders", title: "All Orders", type: "link" },
        { path: "/sales/orders/pending-orders", title: "Pending Orders", type: "link" },
      ],
    },
  ];

  AdminMenu: Menu[] = [
    { path: "/admin/dashboard", icon: "home", title: "Dashboard", type: "link" },
    {
      title: "Sales Management",
      icon: "editors",
      type: "sub",
      active: false,
      children: [
        { path: "/admin/sales-management/create-sales", title: "Create Account", type: "link" },
        { path: "/admin/sales-management/all-sales", title: "All Accounts", type: "link" }
      ],
    },
    {
      title: "Vendor Management",
      icon: "editors",
      type: "sub",
      active: false,
      children: [
        { path: "/admin/vendor-management/all-vendors", title: "All Accounts", type: "link" }, //TODO change path All Accounts
      ],
    },
    {
      title: "Product Management",
      icon: "editors",
      type: "sub",
      active: false,
      children: [
        { path: "/sample-page/sample-page1", title: "All Accounts", type: "link" }, //TODO change path All Accounts
      ],
    },
    { path: "/admin/reports", icon: "faq", title: "Reports", type: "link" },
  ];

  SuperAdminMenu: Menu[] = [
    { path: "/super-admin/dashboard", icon: "home", title: "Dashboard", type: "link" },
    {
      title: "Admin Management",
      icon: "editors",
      type: "sub",
      active: false,
      children: [
        { path: "/super-admin/admin-management/create-admin", title: "Create Account", type: "link" },
        { path: "/super-admin/admin-management/all-admins", title: "All Accounts", type: "link" }
      ],
    },
  ];


  // MENUITEMS: Menu[] = [...this.VendorMenu, ...this.SalesMenu, ...this.AdminMenu, ...this.SuperAdminMenu] //TODO If statements depending on what user is logged in
  MENUITEMS: Menu[] = []

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
