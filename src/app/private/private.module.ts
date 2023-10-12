import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterModule, RouterStateSnapshot } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PrivateComponent } from './private.component';

const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  console.log('location: ', window.location.href);
  console.log('state: ', state);
  return true;
}

@NgModule({
  declarations: [
    Page1Component,
    Page2Component,
    PrivateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        canActivate: [canActivate],
        component: PrivateComponent,
        children: [
          { path: 'page1', component: Page1Component },
          { path: 'page2', component: Page2Component },
          //{ path: '', redirectTo: 'page1', pathMatch: 'full' }
        ]
      }
    ])
  ]
})
export class PrivateModule { }
