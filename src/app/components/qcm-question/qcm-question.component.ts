import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminActionsService } from 'src/app/services/admin-actions.service';

@Component({
  selector: 'app-qcm-question',
  templateUrl: './qcm-question.component.html',
  styleUrls: ['./qcm-question.component.css']
})
export class QcmQuestionComponent implements OnInit {

  question: string;
  options = new Array<any>();
  answer: string;
  selectedAnswer: any;
  questionId: any;
  constructor(private adminActionsService: AdminActionsService) {
    this.adminActionsService.getQuestionsCourse('1').subscribe( questions  => {
      this.question = questions[0].intitule;
      this.options.push({labelProp: 'a', prop :  questions[0].propa});
      this.options.push({labelProp: 'b', prop :  questions[0].propb});
      this.options.push({labelProp: 'c', prop :  questions[0].propc});
      this.options.push({labelProp: 'd', prop :  questions[0].propd});
      this.answer = questions[0].exact_response;
    });
  }

  ngOnInit(): void {

  }

  checkAnswer(): void{

  }
}
