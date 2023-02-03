import { Component } from '@angular/core';
import {UsedService} from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-tree-shaking';

  constructor(private usedService: UsedService) {
  }
}
