import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-index2',
  templateUrl: './index2.component.html',
  styleUrls: ['./index2.component.scss'],
  imports: [CommonModule],
})
export class Index2Component implements OnInit {
  constructor(private router: Router) {}

  /**
   * Navigate to the root route.
   */
  loadProducts(): void {
    this.router.navigate(['/']);  
  }
  ngOnInit(): void {
  }
}
