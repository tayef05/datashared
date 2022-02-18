import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { ParentComponent } from './parent/parent.component';
import { ParenttoComponent } from './parentto/parentto.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'parent', component: ParentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'parentto', component: ParenttoComponent },
  { path: '**', component: PageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
