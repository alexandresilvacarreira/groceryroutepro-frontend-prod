import {trigger, style, animate, transition, keyframes, state} from '@angular/animations';

export const fadeAnimation = trigger('fade', [
  transition(':enter', [
    style({opacity: 0}),
    animate("100ms ease-in"),
  ]),
  transition(':leave', [
    animate("800ms ease-out", style({opacity: 0})),
  ]),
]);

export const slideAnimation = trigger('slide', [
  transition(':enter', [
    style({transform: 'translateX(-100%)', position: 'relative'}),
    animate('1s ease-out', style({transform: 'translateX(0%)', position: 'relative'}))
  ]),
  transition(':leave', [
    style({transform: 'translateX(0%)', position: 'absolute'}),
    animate('500ms ease-out', style({transform: 'translateX(100%)', position: 'absolute', opacity: 0}))
  ])
]);

export const slideAnimationTabMenu = trigger('slide', [
  transition(':enter', [
    style({transform: 'translateX(-100%)'}),
    animate('300ms', style({transform: 'translateX(0%)'})),
  ]),
  transition(':leave', [
    style({transform: 'translateX(0%)'}),
    animate('300ms', style({transform: 'translateX(100%)', opacity: 0})),
  ])
]);

export const slideAnimationFilter = trigger('slideFilter', [
  transition(':enter', [
    style({transform: 'translateX(100%)', position: 'relative'}),
    animate('200ms linear', style({transform: 'translateX(0%)', position: 'relative'}))
  ]),
  transition(':leave', [
    style({transform: 'translateX(0%)', position: 'absolute'}),
    animate('200ms linear', style({transform: 'translateX(100%)', position: 'absolute'}))
  ])
]);

export const slideFirst = trigger('slideCarouselFirst', [
  transition(':enter', [
    style({transform: 'scale(0.5)', opacity: 0}),
    animate('700ms ease-in', style({transform:  'scale(1)', opacity: 1}))
  ]),
]);

export const slideMiddle = trigger('slideCarouselMiddle', [
  transition(':enter', [
    style({transform: 'scale(0.5)', opacity: 0}),
    animate('700ms 200ms ease-in-out', style({transform:  'scale(1)', opacity: 1}))
  ]),
]);

export const slideLast = trigger('slideCarouselLast', [
  transition(':enter', [
    style({transform: 'scale(0.5)', opacity: 0}),
    animate('700ms 300ms ease-in-out', style({transform:  'scale(1)', opacity: 1}))
  ]),
]);
