import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, fromEvent, Subject } from "rxjs";
import { takeUntil, debounceTime } from "rxjs/operators";

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

  constructor(private router: Router) {
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

  VendorMenu: Menu[] = [
    { path: "/vendor/dashboard", icon: "home", title: "Dashboard", type: "link" },
    {
      title: "Product",
      icon: "gallery",
      type: "sub",
      active: false,
      children: [
        { path: "/vendor/product/add-product", title: "Add Product", type: "link" }, //TODO change path Add product
        { path: "/sample-page/sample-page2", title: "All Products", type: "link" }, //TODO change path All Products
        { path: "/sample-page/sample-page2", title: "Product Questions", type: "link" }, //TODO change path product questions
      ],
    },
    { path: "/vendor/orders", icon: "page", title: "Orders", type: "link" },
  ];

  SalesMenu: Menu[] = [
    { path: "/sales/dashboard", icon: "home", title: "Dashboard", type: "link" },
    {
      title: "Product",
      icon: "gallery",
      type: "sub",
      active: false,
      children: [
        { path: "/sample-page/sample-page1", title: "Add Product", type: "link" }, //TODO change path Add product
        { path: "/sample-page/sample-page2", title: "All Products", type: "link" }, //TODO change path All Products
        { path: "/sample-page/sample-page2", title: "Product Questions", type: "link" }, //TODO change path product questions
      ],
    },
    { path: "/sales/orders", icon: "page", title: "Orders", type: "link" },
  ];

  AdminMenu: Menu[] = [
    { path: "/admin/dashboard", icon: "home", title: "Dashboard", type: "link" },
    {
      title: "Sales Management",
      icon: "editors",
      type: "sub",
      active: false,
      children: [
        { path: "/sample-page/sample-page1", title: "Create Account", type: "link" }, //TODO change path Create Account
        { path: "/sample-page/sample-page2", title: "Edit Account", type: "link" }, //TODO change path Edit Account
        { path: "/sample-page/sample-page2", title: "All Accounts", type: "link" }, //TODO change path All Accounts
      ],
    },
    {
      title: "Vendor Management",
      icon: "editors",
      type: "sub",
      active: false,
      children: [
        { path: "/sample-page/sample-page1", title: "All Accounts", type: "link" }, //TODO change path All Accounts
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
        { path: "/sample-page/sample-page1", title: "Create Account", type: "link" }, //TODO change path Create Account
        { path: "/sample-page/sample-page2", title: "Edit Account", type: "link" }, //TODO change path Edit Account
        { path: "/sample-page/sample-page2", title: "All Accounts", type: "link" }, //TODO change path All Accounts
      ],
    },
  ];

  MENUITEMS: Menu[] = [...this.VendorMenu, ...this.SalesMenu, ...this.AdminMenu, ...this.SuperAdminMenu] //TODO If statements depending on what user is logged in

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
