import { Router } from '@angular/router';
import { ProdutoService } from './../../produto.service';
import { IProduto } from './../../IProduto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit {
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

  getDetalhesProduto(produto: IProduto) {
    this.router.navigate([`/detalharProduto/${produto.idProduto}`]);
  }
}
