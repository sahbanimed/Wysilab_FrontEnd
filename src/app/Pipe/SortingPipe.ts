import { User } from './../Models/User';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(users: User[], path: string[], order: number): User[] {

    // Check if is not null
    if (!users || !path || !order) return users;

    return users.sort((a: User, b: User) => {
      // We go for each property followed by path
      path.forEach(property => {
        a = a[property];
        b = b[property];
      })

      return a > b ? order : order * (- 1);
    })
  }

}
