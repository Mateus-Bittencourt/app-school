import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesIndexComponent } from './pages/courses-index/courses-index.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesShowComponent } from './pages/courses-show/courses-show.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './pages/layout/layout.component';
import { CoursesNewComponent } from './pages/courses-new/courses-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesIndexComponent,
    CourseComponent,
    CoursesShowComponent,
    LoginComponent,
    LayoutComponent,
    CoursesNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
