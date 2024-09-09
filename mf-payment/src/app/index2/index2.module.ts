import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Index2Component } from './index2.component';

const routes: Routes = [{ path: '', component: Index2Component }];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    Index2Component,  
  ],
})
export class Index2Module {}
