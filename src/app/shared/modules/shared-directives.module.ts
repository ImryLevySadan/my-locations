import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeleportDirective} from '../directives/teleport.directive';




@NgModule({
  declarations: [TeleportDirective],
  imports: [
    CommonModule
  ],
  exports: [TeleportDirective]
})
export class SharedDirectivesModule { }
