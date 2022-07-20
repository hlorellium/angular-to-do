import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageDashboardModule} from "./pages/page-dashboard/page-dashboard.module";

const routes: Routes = [
  {
    path: 'dashboard',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/page-dashboard/page-dashboard.module').then(
        (m) => m.PageDashboardModule,
      ),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
