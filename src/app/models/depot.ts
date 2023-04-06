import { Article } from "./article";
import { Inventaire } from "./inventaire";
import { Mouvement } from "./mouvement";

export class Depot {

    constructor(
        public id: number,
        public codeDepot: string,
        public nom: string,
        public adresse: string,
        public responsable: string,
        public capacite: number, 
        public article: Article[], // Un depot peut contenir +ieurs articles
        public inventaire: Inventaire[], // Un depot peut subir à +ieurs interventions
        public mouvements: Mouvement[], // // Un depot peut contenir +ieurs mouvements (entrées(achats) ou/et sorties(ventes) )
        public couts: number
      ) {}
}



