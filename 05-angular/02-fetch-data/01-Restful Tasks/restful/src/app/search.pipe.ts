import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform<T extends object>(elements: T[], filter: T): Array<T> {
    console.log('searching', elements, filter);

    if (!elements || !filter) {
      return elements;
    }
    return elements.filter(element => this.applyFilter(element, filter));
  }

  private applyFilter<T>(element:T, filter: T): boolean {

    for (const field in filter) {
      if (this.validInput(filter[field]) && this.validInput(element[field])) {
        if (!element[field]
          .toString()
          .toLowerCase()
          .includes(filter[field].toString().toLowerCase())) {
          console.log('included', filter[field]);

          return false;
        }
      }
    }
    return true;
  }

  private validInput<T>(input: T): boolean {
    return input !== undefined && input !== null;
  }
}
