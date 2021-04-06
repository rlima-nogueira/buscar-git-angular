import { Component, OnInit } from '@angular/core';
import { InicioService } from './inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public value;
  public repositorios;
  constructor(
    private inicioService: InicioService,
  ) { }

  ngOnInit(): void {
  }

  public async buscarGit(): Promise<void> {
    (await this.inicioService.buscarUsuario(this.value)).subscribe((retorno) => {
      this.repositorios = retorno;
    });
  }

  public limparBusca(): void {
    this.repositorios = '';
  }

}
