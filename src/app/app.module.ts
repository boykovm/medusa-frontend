import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainCardComponent } from './main/main-card/main-card.component';
import { PsychologyCardComponent } from './main/psychology-card/psychology-card.component';
import { PlusesCardComponent } from './main/pluses-card/pluses-card.component';
import { FaqCardComponent } from './main/faq-card/faq-card.component';
import { BoardAdCardComponent } from './main/board-ad-card/board-ad-card.component';
import { AboutUsCardComponent } from './main/about-us-card/about-us-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Page2Component,
    Page3Component,
    Page4Component,
    MainCardComponent,
    PsychologyCardComponent,
    PlusesCardComponent,
    FaqCardComponent,
    BoardAdCardComponent,
    AboutUsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
