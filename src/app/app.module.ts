import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StuComponent } from './Components/stu/stu.component';
import { St1Component } from './Components/st1/st1.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { KmPipe } from './km.pipe';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/parent/child/child.component';
import { StudentComponent } from './Components/student/student.component';
import { TeacherComponent } from './Components/teacher/teacher.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
// const router:Routes=[
//   {path:'',component:RegisterComponent},
//   {path:'login',component:LoginComponent},
//   {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]}
// ]
@NgModule({
  declarations: [
    AppComponent,
    StuComponent,
    St1Component,
    KmPipe,
    ParentComponent,
    ChildComponent,
    StudentComponent,
    TeacherComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
