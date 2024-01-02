import { Component, inject } from '@angular/core';
import { WebComponent } from '../../components/web/web.component';
import { Data } from '../../../data';
import { CommonModule } from '@angular/common';
import { WebsiteserviceService } from '../../servvices/websiteservice/websiteservice.service';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [CommonModule, WebComponent],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export class WebsiteComponent {
  dataList: Data[] = [];

  websiteservice: WebsiteserviceService = inject (WebsiteserviceService);

  constructor() {
    this.dataList = this.websiteservice.getDataList();
  }
}



