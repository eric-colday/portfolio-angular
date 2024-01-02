import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebsiteserviceService } from '../../servvices/websiteservice/websiteservice.service';
import { Data } from '../../../data';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  websiteService = inject(WebsiteserviceService);
  item: Data | undefined

  constructor() {
    const itemId = Number (this.route.snapshot.params['id']);
    this.item = this.websiteService.getDataById(itemId);
  }
}
