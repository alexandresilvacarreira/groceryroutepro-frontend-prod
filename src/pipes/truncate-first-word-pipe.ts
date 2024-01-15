import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateFirstWord'
})
export class TruncateFirstWordPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }

    const words = value.split(' ');
    return words.length > 0 ? words[0] : '';
  }
}




