import {Component} from '@angular/core';
import {IconsRegisterService} from './shared/services/icons-register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private iconsRegisterService: IconsRegisterService) {
    this.iconsRegisterService.init();
  }
}
