import { Routes } from '@angular/router';
import { AdminComponent } from "./admin/admin.component";
import { ClientViewComponent } from "./client-view/client-view.component";

export const routes: Routes = [
  { path:  'admin', component:  AdminComponent},
  { path:  '', component:  ClientViewComponent}
];
