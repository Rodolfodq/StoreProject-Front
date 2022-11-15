import { IProduto } from './IProduto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private readonly API = 'http://localhost:5250/api/produto';
  constructor(private http: HttpClient) {}

  criarProduto(produto: IProduto): Observable<IProduto> {
    return this.http.post<IProduto>(`${this.API}/CreateProduct`, produto);
  }

  listarProdutos(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(`${this.API}/GetAllProducts`);
  }

  buscarProdutoPorId(id: number): Observable<IProduto> {
    const url = `${this.API}/GetProductById/${id}`;
    return this.http.get<IProduto>(url);
  }

  buscarProdutoPorNome(name: string): Observable<IProduto[]> {
    let params = new HttpParams();
    console.log(name);
    if (name.trim().length > 2) {
      params = params.set('name', name.trim());
      return this.http.get<IProduto[]>(`${this.API}/GetProductByName`, {
        params,
      });
    } else {
      return this.http.get<IProduto[]>(`${this.API}/GetAllProducts`);
    }
  }

  editarProduto(produto: IProduto): Observable<IProduto> {
    const url = `${this.API}/UpdateProduct/${produto.idProduto}`;
    return this.http.put<IProduto>(url, produto);
  }

  excluirProduto(id: number): Observable<IProduto> {
    const url = `${this.API}/DeleteProduct/${id}`;
    return this.http.delete<IProduto>(url);
  }
}
