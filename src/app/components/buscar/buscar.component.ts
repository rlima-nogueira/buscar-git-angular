import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  @Input() dadosRepositorio;
  @Input() dadosUsuario;

  public urlAvatar: String;
  constructor(
  ) { }

  ngOnInit(): void {
    this.urlAvatar = this.dadosUsuario.avatar_url;
    console.log('teste', this.dadosUsuario);
    console.log('teste2', this.dadosRepositorio);
  }





}
