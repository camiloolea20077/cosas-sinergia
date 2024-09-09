import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Index2Component } from './index2/index2.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Index2Component],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
