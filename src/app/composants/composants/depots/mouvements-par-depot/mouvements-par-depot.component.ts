import { Component } from '@angular/core';

@Component({
  selector: 'mouvements-par-depot',
  templateUrl: './mouvements-par-depot.component.html',
  styleUrls: ['./mouvements-par-depot.component.scss']
})
export class MouvementsParDepotComponent {

  mouvements: any[];
  depotId: number;

  constructor(private mouvementService: MouvementService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.depotId = params['depotId'];
      this.mouvementService.getMouvementsByDepot(this.depotId).subscribe(data => {
        this.mouvements = data;
      });
    });
  }
  
}
