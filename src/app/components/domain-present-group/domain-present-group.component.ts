import { Component, OnInit } from '@angular/core';
import { AdminActionsService } from 'src/app/services/admin-actions.service';

@Component({
  selector: 'app-domain-present-group',
  templateUrl: './domain-present-group.component.html',
  styleUrls: ['./domain-present-group.component.css'],
})
export class DomainPresentGroupComponent implements OnInit {
  domainsList: any[];
  datasLoaded = false;
  constructor(private adminActionsService: AdminActionsService) {
    this.adminActionsService.getDomainsList().subscribe((domainList) => {
      this.domainsList = domainList;
      this.datasLoaded = true;
    });
  }

  ngOnInit(): void {}
}
