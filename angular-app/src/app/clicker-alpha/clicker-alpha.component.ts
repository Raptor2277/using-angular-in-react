import { Component } from '@angular/core';
import { AppConfigService } from 'src/services/appConfigService';

@Component({
  selector: 'app-clicker-alpha',
  templateUrl: './clicker-alpha.component.html',
  styleUrls: ['./clicker-alpha.component.scss']
})
export class ClickerAlphaComponent {
  constructor(private appConfig: AppConfigService){
    console.log(appConfig.testFunction());
  }
 
  public times: number = 0;

  public click(){
    this.times++;
  }
}
