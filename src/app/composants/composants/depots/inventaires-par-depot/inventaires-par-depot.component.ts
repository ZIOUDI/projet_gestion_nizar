import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventairesService } from 'src/app/services/inventaires/inventaires.service';

@Component({
  selector: 'inventaires-par-depot',
  templateUrl: './inventaires-par-depot.component.html',
  styleUrls: ['./inventaires-par-depot.component.scss']
})
export class InventairesParDepotComponent {


  inventaires!: string[];
  depotId!: number;

  constructor(private inventaireService: InventairesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.depotId = params['depotId'];
      this.inventaireService.getInventairesByDepot(this.depotId).subscribe((data : string[])=> {
        this.inventaires = data;
      });
    });
  }

}
