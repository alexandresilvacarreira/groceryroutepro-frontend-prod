import {trigger, style, animate, transition, keyframes} from '@angular/animations';

export const fadeAnimation = trigger('fade', [
  transition(':enter', [
    style({opacity: 0}),
    animate("100ms ease-in"),
  ]),
  transition(':leave', [
    animate("800ms ease-out",  style({opacity: 0})),
  ]),
]);

