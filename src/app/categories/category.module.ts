import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesComponent} from './categories.component';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesListComponent} from './categories-list/categories-list.component';
import {SharedDirectivesModule} from '../shared/modules/shared-directives.module';
import {SharedComponentsModule} from '../shared/modules/shared-components.module';
import {AddCategoryComponent} from './add-category/add-category.component';
import {SharedModulesModule} from '../shared/modules/shared-modules.module';
import {ViewCategoryComponent} from './view-category/view-category.component';
import {EditCategoryComponent} from './edit-category/edit-category.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'my-categories'},
  {
    path: 'my-categories',
    component: CategoriesComponent,
    children: [
      {
        path: 'list',
        component: CategoriesListComponent
      },
      {
        path: 'add',
        component: AddCategoryComponent
      },
      {
        path: ':id',
        component: ViewCategoryComponent
      }, {
        path: ':id/edit',
        component: EditCategoryComponent
      },

    ]
  },
];

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesListComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    SharedDirectivesModule,
    SharedComponentsModule,
    SharedModulesModule,
    RouterModule.forChild(routes),

  ]
})
export class CategoryModule {
}
