import { Depot } from "./depot";
import { Produit } from "./produit";

export class Mouvement {

    id: number;
    date: Date;
    produit: Produit;
    dépôt: Depot;
    quantité: number;
    codeMouvement: string;

    
}
