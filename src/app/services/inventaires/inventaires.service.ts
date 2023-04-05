 


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventairesService {

  private baseUrl = 'http://localhost:8080/api/inventaires';

  constructor(private http: HttpClient) { }

  getInventairesByDepot(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/depot/${id}`);
  }

  createInventaire(inventaire: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, inventaire);
  }

  updateInventaire(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteInventaire(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getInventaire(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
