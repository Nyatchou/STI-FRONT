import { Component, Input, OnInit } from '@angular/core';
import { AdminActionsService } from 'src/app/services/admin-actions.service';

@Component({
  selector: 'app-courses-group',
  templateUrl: './courses-group.component.html',
  styleUrls: ['./courses-group.component.css']
})
export class CoursesGroupComponent implements OnInit {

  // @Input() domainId: string;
  @Input() coursesList: any[];
  @Input() imageDomainUrl: string;
  @Input() domainName: string;
  constructor(private adminActionsService: AdminActionsService) { 

  }

  ngOnInit(): void {

  }

}
