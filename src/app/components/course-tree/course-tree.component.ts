import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-tree',
  templateUrl: './course-tree.component.html',
  styleUrls: ['./course-tree.component.css']
})
export class CourseTreeComponent implements OnInit {

  @Input() nodeTree: {
    name: string;
    subsections: any[];
  };
  nodeClicked = false;
  constructor() { }

  ngOnInit(): void {
  }

}
