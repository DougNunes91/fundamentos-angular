import { TransferenciaService } from './../service/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from 'src/models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  valor: number;
  destino: number;

  constructor(private transferenciaService: TransferenciaService, private router: Router){}

  transferir() {
    console.log('Solicitada nova transferência');
    const transferencia: Transferencia = {valor: this.valor, destino: this.destino};
    //metodo post tbm retorna Observable, usamos subscribe() para escutar o retorno
    this.transferenciaService.adicionarTransferenciaHttpPost(transferencia).subscribe(result =>{
      console.log(result);
      this.limparDados();
      this.router.navigateByUrl('extrato');
    },
    //se acontecer algum erro no post, faço isso:
    error => console.error(error))
  }

  limparDados(){
    this.valor = 0;
    this.destino = 0;
  }



}
