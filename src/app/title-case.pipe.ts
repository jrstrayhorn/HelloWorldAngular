import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(title: string, args?: any): any {
    if (!title)
      return null;

    return title
      .toLowerCase()
      .split(' ')
      .map((word, idx) => {
          if (idx == 0)
            return this.getTitleCase(word);

          if (word == "of" || word == "the")
            return word;

          return this.getTitleCase(word);
        }
      )
      .join(' ');
    
  }

  getTitleCase(word: string) : string
  {
      return word.substring(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

}
