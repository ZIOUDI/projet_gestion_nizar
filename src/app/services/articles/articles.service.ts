 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private baseUrl = 'http://localhost:8080/api/articles';

  constructor(private http: HttpClient) { }

  getArticlesByDepot(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/depot/${id}`);
  }

  createArticle(article: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, article);
  }

  updateArticle(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteArticle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getArticle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}