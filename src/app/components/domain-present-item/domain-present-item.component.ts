import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-domain-present-item',
  templateUrl: './domain-present-item.component.html',
  styleUrls: ['./domain-present-item.component.css'],
})
export class DomainPresentItemComponent implements OnInit {
  @Input() domainId: string;
  @Input() nomDomaine: string;
  @Input() imageUrlPresent: string;
  constructor() {}

  ngOnInit(): void {}
}
