import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyComponent2Component } from './my-component2/my-component2.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyComponent2Component, MyComponentComponent],
  providers:[ ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoAngular';
}
