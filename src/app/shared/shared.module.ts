import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLayoutComponent } from './shared-layout/shared-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from "@angular/router";
import { LogoComponent } from './logo/logo.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';
import { ProfileButtonComponent } from './profile-button/profile-button.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';



@NgModule({
  declarations: [
    SharedLayoutComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    NavigationComponent,
    LanguageSwitcherComponent,
    ProfileButtonComponent,
    SiteMapComponent,
    FooterInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
