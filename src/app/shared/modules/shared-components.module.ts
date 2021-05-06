import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderActionsComponent} from '../components/header-actions/header-actions.component';
import {SharedModulesModule} from './shared-modules.module';

const components = [HeaderActionsComponent];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    SharedModulesModule
  ],
  exports: [components]
})
export class SharedComponentsModule {
}
