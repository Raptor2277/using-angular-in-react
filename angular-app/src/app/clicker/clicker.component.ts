import { Component } from '@angular/core';
import { AppConfigService } from 'src/services/appConfigService';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent {
  constructor(private appConfig: AppConfigService){
    console.log(appConfig.testFunction());
  }
 
  public times: number = 0;

  public click(){
    this.times++;
  }
}
