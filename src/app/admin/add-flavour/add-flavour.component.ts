import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatInput } from "@angular/material/input";

@Component({
  selector: 'app-add-flavour',
  standalone: true,
  imports: [
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './add-flavour.component.html',
  styleUrl: './add-flavour.component.scss'
})
export class AddFlavourComponent {
  flavourFrmControl = new FormControl('', []);
}
