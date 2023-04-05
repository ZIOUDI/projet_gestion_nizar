import { Component } from '@angular/core';

@Component({
  selector: 'articles-par-depot',
  templateUrl: './articles-par-depot.component.html',
  styleUrls: ['./articles-par-depot.component.scss']
})
export class ArticlesParDepotComponent {

  articles: any[];
  depotId: number;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.depotId = params['depotId'];
      this.articleService.getArticlesByDepot(this.depotId).subscribe(data => {
        this.articles = data;
      });
    });
  }

}
