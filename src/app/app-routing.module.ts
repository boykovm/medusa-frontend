import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedLayoutComponent } from "./shared/shared-layout/shared-layout.component";
import { MainComponent } from "./main/main.component";
import { Page2Component } from "./page2/page2.component";
import { Page3Component } from "./page3/page3.component";
import { Page4Component } from "./page4/page4.component";

const routes: Routes = [
  {
    path: '', component: SharedLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: "full" },
      { path: '', component: MainComponent },
      { path: '2', component: Page2Component },
      { path: '3', component: Page3Component },
      { path: '4', component: Page4Component },
    ]
  },
  {
    path: 'user', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
