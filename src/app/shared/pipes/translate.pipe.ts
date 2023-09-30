import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(array: any[], lang: string): string {
    const frenchNameObj = array.find(n => n.language.name === lang);
    return frenchNameObj ? frenchNameObj.name : '';
  }

}
