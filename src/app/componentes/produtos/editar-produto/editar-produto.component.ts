import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../produto.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css'],
})
export class EditarProdutoComponent implements OnInit {
  formulario!: FormGroup;
  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarProdutoPorId(parseInt(id!)).subscribe((produto) => {
      this.formulario = this.formBuilder.group({
        idProduto: [produto.idProduto],
        status: [produto.status],
        nome: [
          produto.nome,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
            Validators.maxLength(150),
          ]),
        ],
        descricao: [
          produto.descricao,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
            Validators.maxLength(2000),
          ]),
        ],
        imagem: [
          produto.imagem,
          Validators.compose([
            Validators.pattern(
              /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
            ),
          ]),
        ],
        estoque: [
          produto.estoque,
          Validators.compose([Validators.required, Validators.min(1)]),
        ],
        preco: [
          produto.preco,
          Validators.compose([Validators.required, Validators.min(0.01)]),
        ],
      });
    });
  }

  editarProduto() {
    this.service.editarProduto(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarProdutos']);
    });
  }

  cancelar() {
    this.location.back();
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao';
    } else return 'botao__desabilitado';
  }
}
