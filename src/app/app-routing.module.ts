import { DetalharProdutoComponent } from './componentes/produtos/detalhar-produto/detalhar-produto.component';
import { EditarProdutoComponent } from './componentes/produtos/editar-produto/editar-produto.component';
import { ListarProdutoComponent } from './componentes/produtos/listar-produto/listar-produto.component';
import { CriarProdutoComponent } from './componentes/produtos/criar-produto/criar-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarProdutos',
    pathMatch: 'full',
  },
  {
    path: 'criarProduto',
    component: CriarProdutoComponent,
  },
  {
    path: 'listarProdutos',
    component: ListarProdutoComponent,
  },
  {
    path: 'produto/editarProduto/:id',
    component: EditarProdutoComponent,
  },
  {
    path: 'produto/detalharProduto/:id',
    component: DetalharProdutoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
