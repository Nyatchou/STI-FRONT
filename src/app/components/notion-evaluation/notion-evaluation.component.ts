import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminActionsService } from 'src/app/services/admin-actions.service';

@Component({
  selector: 'app-notion-evaluation',
  templateUrl: './notion-evaluation.component.html',
  styleUrls: ['./notion-evaluation.component.css'],
})
export class NotionEvaluationComponent implements OnInit {
  questionList = new Array<{
    id: string;
    options: any[];
    questionLabel: string;
  }>();
  answerList = new Array<any>();
  // selectedAnswers = new Array<any>();
  questionsForm: FormArray;
  constructor(
    private adminActionsService: AdminActionsService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.questionsForm = new FormArray([]);
    const notionId = this.activatedRoute.snapshot.paramMap.get('id');
    this.adminActionsService
      .getQuestionsNotion(notionId)
      .subscribe((questions) => {
        for (const item of questions) {
          const questionId = item.id;
          const label = item.intitule;
          const optionsL = new Array<any>();
          optionsL.push({
            labelProp: 'propa',
            prop: item.propa,
            isCorrectOption: 'null',
          });
          optionsL.push({
            labelProp: 'propb',
            prop: item.propb,
            isCorrectOption: 'null',
          });
          optionsL.push({
            labelProp: 'propc',
            prop: item.propc,
            isCorrectOption: 'null',
          });
          optionsL.push({
            labelProp: 'propd',
            prop: item.propd,
            isCorrectOption: 'null',
          });
          this.questionList.push({
            id: questionId,
            options: optionsL,
            questionLabel: label,
          });
          this.answerList.push({ id: questionId, label: item.exact_response });
          this.questionsForm.push(
            this.formBuilder.group({
              valueChecked: ['', [Validators.required]],
            })
          );
        }
        // this.selectedAnswers.push('propa');
        // this.selectedAnswers.push('propb');
        // this.selectedAnswers.push('propc');
        // this.selectedAnswers.push('propd');
      });
  }

  submit(): void {
    this.reinitForm();
    for (const item of this.questionsForm.controls) {
      if (item.value.valueChecked === '') {
        alert(
          'Vous devez selectionner des réponses pour chacune des questions'
        );
        return;
      }
    }
    this.makeCorrectionAndPost();
  }

  reinitForm(): void {
    this.questionList.forEach((qcm) => {
      qcm.options.forEach((opt) => {
        opt.isCorrectAnswer = 'null';
      });
    });
  }

  makeCorrectionAndPost(): void {
    this.questionsForm.controls.forEach((control, ind) => {
      const valueChecked = control.value.valueChecked;
      const formData = new FormData();
      formData.append('question', this.questionList[ind].id);
      formData.append('answer', valueChecked);
      this.adminActionsService.createQuestionAnswer(formData).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
      const isCorrectAnswer = valueChecked === this.answerList[ind].label;
      const optionChecked = this.questionList[ind].options.find(
        (option) => option.labelProp === valueChecked
      );
      optionChecked.isCorrectAnswer = isCorrectAnswer ? 'true' : 'false';
    });
  }
}
