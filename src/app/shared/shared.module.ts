import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLayoutComponent } from './shared-layout/shared-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    SharedLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
