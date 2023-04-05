import { Component } from '@angular/core';

@Component({
  selector: 'inventaires-par-depot',
  templateUrl: './inventaires-par-depot.component.html',
  styleUrls: ['./inventaires-par-depot.component.scss']
})
export class InventairesParDepotComponent {


  inventaires: any[];
  depotId: number;

  constructor(private inventaireService: InventaireService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.depotId = params['depotId'];
      this.inventaireService.getInventairesByDepot(this.depotId).subscribe(data => {
        this.inventaires = data;
      });
    });
  }

}
