import { Component } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  async loadIndex2() {
    try {
      const module = await loadRemoteModule({
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'index2',
        exposedModule: './Index2Module',
      });

      console.log('Index2Component loaded:', module);
    } catch (error) {
      console.error('Error loading Index2Component:', error);
    }
  }
}