import { Transferencia } from './../../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listTransferencia: any[];
  private url = "http://localhost:3000/transferencias";

constructor(private httpClient: HttpClient) {
  this.listTransferencia = [];
}

get transferencias() {return this.listTransferencia;}

/* Observable usamos para "nos increver para escutar" quando vier algum retorno do metodo get()
*  Entao se vier uma resposta e eu estiver inscrito, posso obter o resultado dessa resposta
*  Usa-se o metodo do Observable subscribe() para inscrever-se na resposta
*/
listTransferenciaHttpGet(): Observable<Transferencia[]>{
  return this.httpClient.get<Transferencia[]>(this.url);
}

adicionarTransferenciaHttpPost(transferencia: Transferencia): Observable<Transferencia>{
  this.adicionarData(transferencia);
  return this.httpClient.post<Transferencia>(this.url, transferencia);
}
  adicionarData(transferencia: any) { transferencia.data = new Date(); }

}
