import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminActionsService } from 'src/app/services/admin-actions.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-qcm-question',
  templateUrl: './qcm-question.component.html',
  styleUrls: ['./qcm-question.component.css'],
})
export class QcmQuestionComponent implements OnInit {
  question: string;
  options = new Array<any>();
  answer: string;
  selectedAnswer: any;
  questionId: any;
  optionRemoved: string;
  seconds = 0;
  intervalId: number;
  questionStarted = false;
  submitted = false;
  constructor(
    private adminActionsService: AdminActionsService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getUser().subscribe((data) => {
      this.authService.setUser(data.first_name, data.last_name, data.email, data.date_of_birth, data.role, data.id);
      this.getBackendDatas();
      console.log(this.authService.user.id);
    });
  }

  getBackendDatas(): void {
    const courseId = this.activatedRoute.snapshot.paramMap.get('id');

    this.adminActionsService
      .getQuestionCourse(courseId)
      .subscribe((question) => {
        this.questionId = question.id;
        this.question = question.intitule;
        this.answer = question.exact_response;

        this.options.push({
          labelProp: 'propa',
          prop: question.propa,
          isCorrectOption: 'propa' === this.answer,
        });
        this.options.push({
          labelProp: 'propb',
          prop: question.propb,
          isCorrectOption: 'propb' === this.answer,
        });
        this.options.push({
          labelProp: 'propc',
          prop: question.propc,
          isCorrectOption: 'propc' === this.answer,
        });
        this.options.push({
          labelProp: 'propd',
          prop: question.propd,
          isCorrectOption: 'propd' === this.answer,
        });
      });
  }

  getNewQuestion(): void {
    this.selectedAnswer = undefined;
    this.options = new Array<any>();
    this.optionRemoved = undefined;
    this.questionStarted = false;
    this.submitted = false;
    this.getBackendDatas();
  }

  submitAnswer(): void {
    this.makeCorrectionAndPost();
    alert(
      'Vous avez mis ' +
        this.seconds +
        ' secondes ' +
        'pour effectuer une action sur cette question !'
    );
    this.stopTimer();
    this.seconds = 0;
    this.submitted = true;
  }

  increaseSeconds(): void {
    this.seconds += 1;
  }

  startTimer(): void {
    this.questionStarted = true;
    this.intervalId = window.setInterval(() => this.increaseSeconds(), 999);
  }

  stopTimer(): void {
    clearInterval(this.intervalId);
  }

  makeHelp(): void {
    const otherOptions = this.options.filter(
      (option) => !option.isCorrectOption
    );
    let rand = Math.floor(Math.random() * 3);
    if (rand !== 0) {
      rand -= 1;
    }
    this.optionRemoved = otherOptions[rand].labelProp;

    console.log(this.seconds);
    this.stopTimer();
  }

  makeCorrectionAndPost(): void {
    const formData = new FormData();
    formData.append('question', this.questionId);
    formData.append('answer', this.selectedAnswer);
    formData.append(
      'help_asked',
      this.optionRemoved === null || this.optionRemoved === undefined
        ? 'False'
        : 'True'
    );
    formData.append('overlap_time', this.seconds.toString());
    formData.append('user', this.authService.user.id);

    const formDict = {
      question: this.questionId,
      answer: this.selectedAnswer,
      help_asked:
        this.optionRemoved === null || this.optionRemoved === undefined
          ? 'False'
          : 'True',
      overlap_time: this.seconds,
    };
    this.adminActionsService.createQuestionAnswer(formData).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }
}
