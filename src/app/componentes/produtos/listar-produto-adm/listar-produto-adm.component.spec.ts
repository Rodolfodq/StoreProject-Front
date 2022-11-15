import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProdutoAdmComponent } from './listar-produto-adm.component';

describe('ListarProdutoAdmComponent', () => {
  let component: ListarProdutoAdmComponent;
  let fixture: ComponentFixture<ListarProdutoAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProdutoAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarProdutoAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
