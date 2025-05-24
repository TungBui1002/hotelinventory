import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from "./rooms/rooms.component";

@Component({
  selector: 'hinv-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  // template: '<h1>hello WELCOM TO MY IT ROOM</h1> <p>TUNG.BUI</p>',
  styleUrl: './app.component.scss',
  imports: [RoomsComponent]
})
export class AppComponent {
  title = 'hotelinventory';
}
