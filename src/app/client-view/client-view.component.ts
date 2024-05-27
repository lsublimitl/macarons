import { Component } from '@angular/core';
import { HeroViewComponent } from "../hero-view/hero-view.component";
import { OfferViewComponent } from "../offer-view/offer-view.component";

@Component({
  selector: 'app-client-view',
  standalone: true,
    imports: [
        HeroViewComponent,
        OfferViewComponent
    ],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.scss'
})
export class ClientViewComponent {

}
