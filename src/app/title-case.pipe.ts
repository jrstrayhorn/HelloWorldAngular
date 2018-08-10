import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(title: string): any {
    if (!title)
      return null;

    return title
      .toLowerCase()
      .split(' ')
      .map((word, idx) => {
          if (idx == 0)
            return this.getTitleCase(word);

          if (this.isPreposition(word))
            return word;

          return this.getTitleCase(word);
        }
      )
      .join(' ');
  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      'of',
      'the',
      'in'
    ]

    return prepositions.includes(word);
  }

  private getTitleCase(word: string) : string
  {
      return word.substring(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

}
