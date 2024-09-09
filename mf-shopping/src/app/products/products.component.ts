import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({

  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private router: Router) {}

  loadIndex2(): void {
    this.router.navigate(['/index2']);  // Redirige a la ruta configurada para Index2
  }
  /**
   * Inicializa el componente.
   *
   * Este m todo es llamado justo despu s de que el componente sea
   * instanciado y antes de que se haya creado la vista.
   *
   * En este caso, no se hace nada en particular.
   */
  ngOnInit(): void {


  }

}
