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

export const slideAnimation =  trigger('slide', [
  transition(':enter', [
    style({transform: 'translateX(-100%)', position: 'relative'}),
    animate('1s ease-out', style({transform: 'translateX(0%)', position: 'relative'}))
  ]),
  transition(':leave', [
    style({transform: 'translateX(0%)', position: 'absolute'}),
    animate('500ms ease-out', style({transform: 'translateX(100%)', position: 'absolute', opacity: 0}))
  ])
]);

