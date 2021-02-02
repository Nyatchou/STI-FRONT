import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminActionsService } from 'src/app/services/admin-actions.service';

@Component({
  selector: 'app-notion-present-page',
  templateUrl: './notion-present-page.component.html',
  styleUrls: ['./notion-present-page.component.css']
})
export class NotionPresentPageComponent implements OnInit {

  notionId: string;
  notionDetails: any;
  videoFileUrl: string;
  datasLoaded = false;
  hasDocumentFile: boolean;
  hasURLFile: boolean;
  constructor(private adminActionsService: AdminActionsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.notionId = this.activatedRoute.snapshot.paramMap.get('id');
    this.adminActionsService.getExtendNotion(this.notionId).subscribe((notionDets) => {
      this.notionDetails = notionDets;
      this.datasLoaded = true;
      console.log(notionDets);
      for (const file of this.notionDetails.files_ressources){
        if (file.ressource_type === 'video'){
          this.videoFileUrl = file.ressource_file;
          break;
        }
      }
      this.hasDocumentFile = this.notionDetails.files_ressources.find((val) => val.ressource_type === 'document') !== -1;
      this.hasURLFile = this.notionDetails.urls_ressources.length !== 0;
    });

  }

}
