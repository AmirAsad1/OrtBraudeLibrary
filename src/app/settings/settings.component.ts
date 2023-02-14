import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AdminsService } from '../admins.service';
import { LightModeService } from '../light-mode.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(public lightmode:LightModeService,public admins:AdminsService,public toast:NgToastService) { }

  ngOnInit(): void {
  }
  /* istanbul ignore next */
  toggleLightMode(event:Event) {
    let currentTarget = event.currentTarget as HTMLInputElement;
    this.lightmode.isDarkMode = currentTarget.checked
     
  }
/* istanbul ignore next */
  enterName(event: Event) {
   
    if(this.admins.admins.length<2){
      let target = event.target as HTMLInputElement;
      this.admins.admins.push( target.value);
      target.value=""
    }
    else{
      this.toast.error({detail:"Error Massege",summary:"You are not allowed to enter more than two admins",duration:5000})
    }
  }
}
