import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from '../../IProduto';
import { ProdutoService } from '../../produto.service';

@Component({
  selector: 'app-listar-produto-adm',
  templateUrl: './listar-produto-adm.component.html',
  styleUrls: ['./listar-produto-adm.component.css'],
})
export class ListarProdutoAdmComponent implements OnInit {
  listaProdutos: IProduto[] = [];
  filtro: string = '';
  constructor(private service: ProdutoService, private router: Router) {}

  ngOnInit(): void {
    this.service.listarProdutos().subscribe((listaProdutos) => {
      this.listaProdutos = listaProdutos;
    });
  }

  cadastrarProduto() {
    this.router.navigate(['/criarProduto']);
  }

  pesquisaProdutos() {
    this.service
      .buscarProdutoPorNome(this.filtro)
      .subscribe((listaProdutos) => {
        this.listaProdutos = listaProdutos;
      });
  }

  editarProduto(produto: IProduto) {
    this.router.navigate([`/editarProduto/${produto.idProduto?.toString()}`]);
  }

  deletarProduto(produto: IProduto) {
    this.router.navigate([`/deletarProduto/${produto.idProduto?.toString()}`]);
  }
}
