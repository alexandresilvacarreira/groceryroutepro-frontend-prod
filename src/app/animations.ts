import { trigger, style, animate, transition } from '@angular/animations';

export const spinAnimation = trigger('spin', [
  transition('void => *', [
    style({ transform: 'rotate(0deg)' }),
    animate('1s linear', style({ transform: 'rotate(360deg)' }))
  ])
]);

export const fadeAnimation = trigger('fade', [
  transition(':enter', [
    style({opacity: 0}),
    animate("100ms ease-in"),
  ]),
  transition(':leave', [
    animate("800ms ease-out",  style({opacity: 0})),
  ]),
]);

