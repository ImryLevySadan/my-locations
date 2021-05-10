import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderActionsComponent} from '../components/header-actions/header-actions.component';
import {SharedModules} from './shared-modules.module';

const components = [HeaderActionsComponent];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    SharedModules
  ],
  exports: [components]
})
export class SharedComponentsModule {
}
