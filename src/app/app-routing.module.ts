import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultAuthComponent } from './auth/components/default-auth/default-auth.component';
import { AuthGuestService } from './core/guards/auth-guest.service';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { DefaultCoursesComponent } from './courses/components/default-courses/default-courses.component';
import { PageNotFoundComponent } from './page-not-found.component';


const routes: Routes = [
  {
    path: 'auth',
    canActivate: [AuthGuestService],
    component: DefaultAuthComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'courses',
    canActivate: [AuthGuardService],
    component: DefaultCoursesComponent,
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
