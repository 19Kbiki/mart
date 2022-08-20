import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestComponent } from './best/best.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { OnComponent } from './on/on.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'bestsel', component: BestComponent },
      { path: 'newsel', component: NewComponent },
      { path: 'onsel', component: OnComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
