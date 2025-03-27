import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./UI/navbar/navbar.component";
import { CardComponent } from "./UI/card/card.component";
import { FooterComponent } from "./UI/footer/footer.component";
import { CarouselComponent } from "./UI/carousel/carousel.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent,  RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ekart';
}
