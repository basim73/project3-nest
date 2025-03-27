import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data={
    id: 1,
    image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    producttitle:"card title",
    price:"$45.6",
    category:"mens clothing",
    description:"this is a card description",
    rate:"3.5"
  };


}
