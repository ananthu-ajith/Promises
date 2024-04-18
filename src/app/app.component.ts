import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,TableComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularasync';

 
}
