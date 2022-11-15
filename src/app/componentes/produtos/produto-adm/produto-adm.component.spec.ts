import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAdmComponent } from './produto-adm.component';

describe('ProdutoAdmComponent', () => {
  let component: ProdutoAdmComponent;
  let fixture: ComponentFixture<ProdutoAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
