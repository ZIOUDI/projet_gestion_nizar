import { Depot } from "./depot";
import { Produit } from "./produit";


export class Sortie extends Mouvement {

  constructor(
    public override id: number,
    public override code: string,
    public override produit: Produit,
    public override quantite: number,
    public override date: Date,
    public override depot: Depot,
    public codeSortie: string
  )
   {    super(id, code, produit, quantite, date, depot);
  }

  }
