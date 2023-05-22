import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barre-rechercher',
  templateUrl: './barre-rechercher.component.html',
  styleUrls: ['./barre-rechercher.component.scss']
})
export class BarreRechercherComponent {


  @Output() search = new EventEmitter<string>();
  @Output() clear = new EventEmitter<void>();
  searchTerm: string = '';

  onSearch() {
    this.search.emit(this.searchTerm);
  }

  onClear() {
    this.searchTerm = '';
    this.clear.emit();
  }
}