import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { SharedLayoutComponent } from "../shared/shared-layout/shared-layout.component";


const routes: Routes = [
  {
    path: '', component: SharedLayoutComponent, children: [
      // { path: '', redirectTo: '/user', pathMatch: 'full' },
      // { path: '', component: MainComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
    ]
  },
];


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class LoginModule { }
