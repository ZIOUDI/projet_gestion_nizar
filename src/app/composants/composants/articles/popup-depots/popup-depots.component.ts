import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Depot } from 'src/app/models/depot';
import { DepotsService } from 'src/app/services/depots/depots.service';

@Component({
  selector: 'app-popup-depots',
  templateUrl: './popup-depots.component.html',
  styleUrls: ['./popup-depots.component.scss']
})
export class PopupDepotsComponent {
affecter() {
throw new Error('Method not implemented.');
}

  depots!: Depot[];  // votre liste de depots
  selectedDepot!: Depot;

  constructor(private depotsService:  DepotsService ) { }


   
  ngOnInit() {

    console.log(' PopupDepotsComponent - methode -  ngOnInit')


      this.depotsService.getDepots()
      .subscribe(depots => {
        this.depots = depots;
      });
  }


}
