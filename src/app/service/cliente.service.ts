import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteURL = 'http://localhost:8080/customers/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.clienteURL + 'listaCustomer');
  }

  public detail(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.clienteURL + `${id}`);
  }


  public save(cliente: Cliente): Observable<any> {
    return this.httpClient.post<any>(this.clienteURL + 'createCustomer', cliente);
  }

  public update(cliente: Cliente): Observable<any> {
    return this.httpClient.post<any>(this.clienteURL + `updateCustomer`, cliente);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.clienteURL + `deleteCustomer/${id}`);
  }
}
