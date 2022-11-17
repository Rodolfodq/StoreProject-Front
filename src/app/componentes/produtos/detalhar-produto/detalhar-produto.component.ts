import { IProduto } from './../../IProduto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhar-produto',
  templateUrl: './detalhar-produto.component.html',
  styleUrls: ['./detalhar-produto.component.css'],
})
export class DetalharProdutoComponent implements OnInit {
  produto: IProduto = {
    idProduto: 0,
    descricao: '',
    estoque: 0,
    imagem: '',
    nome: '',
    preco: 0,
    status: false,
  };
  constructor(private service: ProdutoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarProdutoPorId(parseInt(id!)).subscribe((produto) => {
      this.produto = produto;
    });
  }

  adicionarAoCarrinho(nome: string) {
    alert(`${nome} adicionado ao carrinho!`);
  }
}
