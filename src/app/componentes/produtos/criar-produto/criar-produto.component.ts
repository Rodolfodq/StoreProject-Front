import { ProdutoService } from './../../produto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css'],
})
export class CriarProdutoComponent implements OnInit {
  formulario!: FormGroup;
  constructor(
    private service: ProdutoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.maxLength(150),
        ]),
      ],
      descricao: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.maxLength(2000),
        ]),
      ],
      imagem: [
        '',
        Validators.compose([
          Validators.pattern(
            /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
          ),
        ]),
      ],
      estoque: [
        0,
        Validators.compose([Validators.required, Validators.min(1)]),
      ],
      preco: [
        0,
        Validators.compose([Validators.required, Validators.min(0.01)]),
      ],
      status: true,
    });
  }
  criarProduto() {
    console.log(this.formulario);
    if (this.formulario.valid) {
      this.service.criarProduto(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarProdutos']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/listarProdutos']);
  }
}
