import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminActionsService } from 'src/app/services/admin-actions.service';

@Component({
  selector: 'app-chapter-present-page',
  templateUrl: './chapter-present-page.component.html',
  styleUrls: ['./chapter-present-page.component.css']
})
export class ChapterPresentPageComponent implements OnInit {

  chapterId: string;
  chapterDetails: any;
  constructor(private adminActionsService: AdminActionsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.chapterId = this.activatedRoute.snapshot.paramMap.get('id');
    this.adminActionsService.getExtendChapter(this.chapterId).subscribe((chapter) => {
      this.chapterDetails = chapter;
    });
  }

}
