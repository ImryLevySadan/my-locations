import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesComponent} from './categories.component';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesListComponent} from './categories-list/categories-list.component';
import {SharedDirectivesModule} from '../shared/modules/shared-directives.module';
import {SharedComponentsModule} from '../shared/modules/shared-components.module';
import {AddCategoryComponent} from './add-category/add-category.component';
import {SharedModulesModule} from '../shared/modules/shared-modules.module';
import {CategoriesNav} from './models/categories-navigation.model';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'my-categories'},
  {
    path: 'my-categories',
    component: CategoriesComponent,
    children: [
      {
        path: 'list',
        component: CategoriesListComponent,
        data: {
          context: CategoriesNav.Categories_List
        }
      },
      {
        path: 'add',
        component: AddCategoryComponent,
        data: {
          context: CategoriesNav.Category_Add
        }
      }
    ]
  },
];

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesListComponent,
    AddCategoryComponent
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
