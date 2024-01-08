import {Component, Input} from '@angular/core';
import _default from "chart.js/dist/plugins/plugin.tooltip";
import animations = _default.defaults.animations;
import {faCheck, faCross, faXmark} from "@fortawesome/free-solid-svg-icons";
import {fadeAnimation} from "../../animations";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [fadeAnimation]
})
export class ToastComponent {

  @Input() message!: string;
  @Input() success!: boolean;
  showToast: boolean = false;

  ngOnInit(): void {

    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 2000)

  }

  protected readonly faCheck = faCheck;
  protected readonly faXmark = faXmark;
}
