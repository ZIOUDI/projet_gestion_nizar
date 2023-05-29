import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterById'
})
export class FilterByIdPipe implements PipeTransform {
  transform(articles: any[], searchId: string): any[] {
    if (!articles || !searchId) {
      return articles;
    }
    return articles.filter(article => article.id.includes(searchId));
  }
}
