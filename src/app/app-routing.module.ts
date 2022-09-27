import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CoursesIndexComponent } from './pages/courses-index/courses-index.component';
import { CoursesShowComponent } from './pages/courses-show/courses-show.component';

import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'cursos',
    component: CoursesIndexComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cursos/:id/detalhes',
    component: CoursesShowComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
