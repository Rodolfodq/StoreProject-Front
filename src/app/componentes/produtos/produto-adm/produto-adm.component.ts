import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from '../../IProduto';
import { ProdutoService } from '../../produto.service';

@Component({
  selector: 'app-produto-adm',
  templateUrl: './produto-adm.component.html',
  styleUrls: ['./produto-adm.component.css'],
})
export class ProdutoAdmComponent implements OnInit {
  @Input() produto: IProduto = {
    idProduto: 0,
    descricao: 'Descrição do produto',
    nome: 'Nome do produto',
    estoque: 1,
    preco: 1,
    status: true,
    imagem: 'www.imagem.com.br',
  };
  constructor(private service: ProdutoService, private router: Router) {}

  ngOnInit(): void {}
}
