 
export class Sortie {
    id: number;
    dateSortie: Date;
    quantite: number;
    prixUnitaire: number;
    total: number;
    produitId: number;
    clientID: number;
  
    constructor(
        id: number,
        dateSortie: Date,
        quantite: number,
        prixUnitaire: number,
        total: number,
        produitId: number,
        clientID: number) {
            
      this.id = id  ;
      this.dateSortie = dateSortie ;
      this.quantite = quantite  ;
      this.prixUnitaire = prixUnitaire  ;
      this.total = total  ;
      this.produitId = produitId  ;
      this.clientID = clientID ;
    }
  }
  