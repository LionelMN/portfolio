import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndividualWorkComponent } from './components/individual-work/individual-work.component';

const routes: Routes = [
  {path: 'works/:title', component: IndividualWorkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
