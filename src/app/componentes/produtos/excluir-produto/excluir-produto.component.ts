import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoService } from './../../produto.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-excluir-produto',
  templateUrl: './excluir-produto.component.html',
  styleUrls: ['./excluir-produto.component.css'],
})
export class ExcluirProdutoComponent implements OnInit {
  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarProdutoPorId(parseInt(id!)).subscribe(() => {});
  }

  excluirProduto() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.excluirProduto(parseInt(id!)).subscribe(() => {
      this.router.navigate(['listarProdutos-adm']);
    });
  }

  cancelar() {
    this.location.back();
  }
}
