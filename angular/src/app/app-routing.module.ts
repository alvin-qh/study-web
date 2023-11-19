import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './page/index.component';
import { ComponentComponent } from './page/component.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'components', component: ComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
