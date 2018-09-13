import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PropertySearchPipe'
})
export class PropertySearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(data => {
        if (data) {
          return data.property.property_name.search(searchText) !== -1;
        }
      });
    }
  }
}
