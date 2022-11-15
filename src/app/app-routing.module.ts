import { ExcluirProdutoComponent } from './componentes/produtos/excluir-produto/excluir-produto.component';
import { DetalharProdutoComponent } from './componentes/produtos/detalhar-produto/detalhar-produto.component';
import { EditarProdutoComponent } from './componentes/produtos/editar-produto/editar-produto.component';
import { ListarProdutoComponent } from './componentes/produtos/listar-produto/listar-produto.component';
import { CriarProdutoComponent } from './componentes/produtos/criar-produto/criar-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProdutoAdmComponent } from './componentes/produtos/listar-produto-adm/listar-produto-adm.component';

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
    path: 'editarProduto/:id',
    component: EditarProdutoComponent,
  },
  {
    path: 'detalharProduto/:id',
    component: DetalharProdutoComponent,
  },
  {
    path: 'deletarProduto/:id',
    component: ExcluirProdutoComponent,
  },
  {
    path: 'listarProdutos-adm',
    component: ListarProdutoAdmComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
