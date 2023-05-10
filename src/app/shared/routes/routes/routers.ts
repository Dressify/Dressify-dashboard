import { Routes } from "@angular/router";
import {VendorGuard} from "../../guard/vendor.guard";
import {SalesGuard} from "../../guard/sales.guard";
import {AdminGuard} from "../../guard/admin.guard";
import {SuperAdminGuard} from "../../guard/super-admin.guard";

export const content: Routes = [
  {
    path: "vendor",
    loadChildren: () => import("../../../components/vendor/vendor.module").then((m) => m.VendorModule),
    canActivate: [VendorGuard]
  },
  {
    path: "sales",
    loadChildren: () => import("../../../components/sales/sales.module").then((m) => m.SalesModule),
    canActivate: [SalesGuard]
  },
  {
    path: "admin",
    loadChildren: () => import("../../../components/admin/admin.module").then((m) => m.AdminModule),
    canActivate: [AdminGuard]
  },
  {
    path: "super-admin",
    loadChildren: () => import("../../../components/super-admin/super-admin.module").then((m) => m.SuperAdminModule),
    canActivate: [SuperAdminGuard]
  },
];
