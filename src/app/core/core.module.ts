import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreComponent} from './core.component';
import {CoreRoutingModule} from './core-routing.module';
import {HeaderComponent} from './components/header/header.component';
import {SharedModulesModule} from '../shared/modules/shared-modules.module';


@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedModulesModule
  ]
})
export class CoreModule {
}
