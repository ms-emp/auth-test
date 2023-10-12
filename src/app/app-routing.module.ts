import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@badisi/ngx-auth';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  {
    path: 'public',
    component: PublicComponent
  },
  {
    path: 'private',
    canActivate: [AuthGuard],
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)
  },
  {
    path: '',
    redirectTo: 'private',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
