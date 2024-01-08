import { Component } from '@angular/core';
import {spinAnimation} from "../../animations";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  animations: [spinAnimation]
})
export class LoaderComponent {

}
