import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  animations: [
    trigger('dashAnimation1', [
      state("appear", style({transform:"translateX(10px)", opacity: 0})),
      state("start", style({opacity: 1})),
      state("end", style({transform:"translateX(-50px)", opacity: 0, transformOrigin: 'center'})),
      transition('*=>*', [animate('300ms 100ms linear')])
    ]),
    trigger('dashAnimation2', [
      state("appear", style({transform:"translateX(10px)", opacity: 0})),
      state("start", style({opacity: 1})),
      state("end", style({transform:"translateX(-50px)", opacity: 0, transformOrigin: 'center'})),
      transition('*=>*', [animate('200ms linear')])
    ]),
    trigger('dashAnimation3', [
      state("appear", style({transform:"translateX(10px)", opacity: 0})),
      state("start", style({opacity: 1})),
      state("end", style({transform:"translateX(-50px)", opacity: 0, transformOrigin: 'center'})),
      transition('*=>*', [animate('300ms 200ms linear')])
    ])
  ]
})
export class ErrorComponent implements OnInit{

    protected readonly faArrowLeft = faArrowLeft;
  state: string = "appear";

  ngOnInit(): void {

    setInterval(() => {
      switch (this.state) {
        case 'appear':
          this.state = 'start';
          break;
        case 'start':
          this.state = 'end';
          break;
        case 'end':
          this.state = 'appear';
          break;
      }
    }, 200)

  }

}
