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
        public inventaire: Inventaire[],
        public mouvements: Mouvement[],
        public couts: number
      ) {}
}



