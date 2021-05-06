import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreComponent} from './core.component';
import {CoreRoutingModule} from './core-routing.module';
import {HeaderComponent} from './components/header/header.component';
import {SharedModulesModule} from '../shared/modules/shared-modules.module';
import { HeaderActionsComponent } from './components/header-actions/header-actions.component';
import { HomePageComponent } from './components/home-page/home-page.component';


@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    HeaderActionsComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModulesModule
  ]
})
export class CoreModule {
}
