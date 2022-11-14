import { ProdutoService } from './../../produto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from '../../IProduto';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css'],
})
export class ListarProdutoComponent implements OnInit {
  listaProdutos: IProduto[] = [];
  filtro: string = '';
  constructor(private service: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.service.listarProdutos().subscribe((listaProdutos) => {
      console.log(listaProdutos);
      this.listaProdutos = listaProdutos;
    });
  }

  pesquisaProdutos() {
    this.service
      .buscarProdutoPorNome(this.filtro)
      .subscribe((listaProdutos) => {
        this.listaProdutos = listaProdutos;
      });
  }
}
