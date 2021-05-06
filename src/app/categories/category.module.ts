import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesComponent} from './categories.component';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesListComponent} from './categories-list/categories-list.component';
import {SharedDirectivesModule} from '../shared/modules/shared-directives.module';
import {SharedComponentsModule} from '../shared/modules/shared-components.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'my-list'},
  {
    path: 'my-list',
    component: CategoriesComponent
  },
];

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    SharedDirectivesModule,
    SharedComponentsModule,
    RouterModule.forChild(routes),

  ]
})
export class CategoryModule {
}
