import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
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
export class SplashComponent implements OnInit {

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
