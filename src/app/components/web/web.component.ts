import { Component, Input } from '@angular/core';
import { Data } from '../../../data'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-web',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './web.component.html',
  styleUrl: './web.component.css'
})
export class WebComponent {
  @Input() item!: Data;
}
