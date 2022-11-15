import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ListarProdutoComponent } from './componentes/produtos/listar-produto/listar-produto.component';
import { CriarProdutoComponent } from './componentes/produtos/criar-produto/criar-produto.component';
import { DetalharProdutoComponent } from './componentes/produtos/detalhar-produto/detalhar-produto.component';
import { EditarProdutoComponent } from './componentes/produtos/editar-produto/editar-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoComponent } from './componentes/produtos/produto/produto.component';
import { ListarProdutoAdmComponent } from './componentes/produtos/listar-produto-adm/listar-produto-adm.component';
import { ProdutoAdmComponent } from './componentes/produtos/produto-adm/produto-adm.component';
import { ExcluirProdutoComponent } from './componentes/produtos/excluir-produto/excluir-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    ListarProdutoComponent,
    CriarProdutoComponent,
    DetalharProdutoComponent,
    EditarProdutoComponent,
    ProdutoComponent,
    ListarProdutoAdmComponent,
    ProdutoAdmComponent,
    ExcluirProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
