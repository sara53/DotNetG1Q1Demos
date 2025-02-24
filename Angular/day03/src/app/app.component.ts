import { Component } from '@angular/core';
import { ContentComponent } from './components/content/content.component';
import { MoviesComponent } from './components/Movies/movies.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  imports: [ContentComponent, MoviesComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  itiBranch: string = 'MNF';
  myData: string = '';
  getData(data: any) {
    this.myData = data;
  }
}
