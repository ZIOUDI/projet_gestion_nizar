import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  article!: Article;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private articleService: ArticlesService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const articleId = +id;
      this.articleService.getById(articleId)
        .subscribe(article => this.article = article);
    }
  }

  onSubmit(): void {
    this.articleService.updateArticle(this.article.id, this.article)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}