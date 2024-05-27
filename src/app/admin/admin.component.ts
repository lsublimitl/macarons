import { Component } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { AddFlavourComponent } from "./add-flavour/add-flavour.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    MatButton,
    AddFlavourComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
