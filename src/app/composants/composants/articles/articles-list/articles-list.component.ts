import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';

import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit  {

  articles!: Article[];

  constructor(private articleService: ArticlesService) {}

  ngOnInit() {
    console.log(' ArticlesListComponent - methode -  ngOnInit')


     this.articleService.getArticles()
     .subscribe(articles => {

      this.articles = articles;
     });
  }


modifierArticle(arg0: any) {
throw new Error('Method not implemented.');
}
supprimerArticle(arg0: any) {
throw new Error('Method not implemented.');
}

}
