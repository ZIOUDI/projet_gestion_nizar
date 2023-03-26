


export class Entree {
    id: number;
    dateEntree: Date;
    quantite: number;
    prixUnitaire: number;
    total: number;
    produitId: number;
    fournisseurId: number;


    constructor(
        id: number,
        dateEntree: Date,
        quantite: number,
        prixUnitaire: number,
        total: number,
        produitId: number,
        fournisseurId: number,
    ) 
    
    {
        this.id = id;
        this.dateEntree = dateEntree;
        this.quantite = quantite;
        this.prixUnitaire = prixUnitaire ;
        this.total = total;
        this.produitId = produitId;
        this.fournisseurId = fournisseurId;
    }

}


