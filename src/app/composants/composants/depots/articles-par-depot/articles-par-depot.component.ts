import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'articles-par-depot',
  templateUrl: './articles-par-depot.component.html',
  styleUrls: ['./articles-par-depot.component.scss']
})
export class ArticlesParDepotComponent {

  articles!: string[];
  depotId!: number;

  constructor(private articleService: ArticlesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.depotId = params['depotId'];
      this.articleService.getArticlesByDepot(this.depotId).subscribe((data: string[]) => {
        this.articles = data;
      });
    });
  }

}
