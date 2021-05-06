import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CoreComponent} from './core.component';
import {HomePageComponent} from './components/home-page/home-page.component';


const routes: Routes = [
  {
    // Default page that redirects to the default routing
    // set by the server side.
    path: '',
    pathMatch: 'full',
    component: HomePageComponent,
  },
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'categories',
        loadChildren: () => import('../categories/category.module').then(mod => mod.CategoryModule)
      }
    ]
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
