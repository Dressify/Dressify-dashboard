import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: "dashboard",
    loadChildren: () => import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "sales-management",
    loadChildren: () => import("./sales-management/sales-management.module").then((m) => m.SalesManagementModule),
  },
  {
    path: "vendor-management",
    loadChildren: () => import("./vendor-management/vendor-management.module").then((m) => m.VendorManagementModule),
  },
  {
    path: "product-management",
    loadChildren: () => import("./product-management/product-management.module").then((m) => m.ProductManagementModule),
  },
  {
    path: "reports",
    loadChildren: () => import("./reports/reports.module").then((m) => m.ReportsModule),
  },
  {
    path: 'profile',
    loadChildren: () => import("./profile/profile.module").then((m) => m.ProfileModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
