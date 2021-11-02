import { TransferenciaService } from './../service/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from 'src/models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  receberListTransf: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    /* Nos escrevendo atraves do subscribe(), quando vier uma resposta de sucesso,
    virá como parametro a lista Transferencia. E quando chegar essa lista, insiro dentro da
    variavel receberListTransf.
    */
    this.service.listTransferenciaHttpGet().subscribe((transferencias: Transferencia[]) => {
      console.log(transferencias);
      this.receberListTransf = transferencias;
    })
  }

}
