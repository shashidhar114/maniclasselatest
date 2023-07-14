import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, arithematicType: string, anotherValue: number): unknown {
    switch (arithematicType) {
      case "add":
        return value + anotherValue;
      case "sub":
        return value - anotherValue;
      case "mul":
        return value * anotherValue;
      case "div":
        return value / anotherValue;

      default:
        return "this is not a arithematic operation"
    }

  }

}
