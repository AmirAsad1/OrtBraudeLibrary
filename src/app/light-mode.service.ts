import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightModeService {
isDarkMode:boolean=false;
  constructor() { }
}
