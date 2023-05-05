import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "vendor",
    loadChildren: () => import("../../../components/vendor/vendor.module").then((m) => m.VendorModule),
  },
  {
    path: "sales",
    loadChildren: () => import("../../../components/sales/sales.module").then((m) => m.SalesModule),
  },
  {
    path: "admin",
    loadChildren: () => import("../../../components/admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "super-admin",
    loadChildren: () => import("../../../components/super-admin/super-admin.module").then((m) => m.SuperAdminModule),
  },
];
