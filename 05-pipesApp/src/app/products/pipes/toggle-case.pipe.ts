import { Pipe, PipeTransform } from '@angular/core';

// anthony | toggleCase = 'ANTHONY'
// ANTHONY | toggleCase = 'anthony'

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    console.log(toUpper);
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
