import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as URLS from '../../app/commons/url_backend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminActionsService {
  constructor(private http: HttpClient) {}

  createDomain(formData: FormData): Observable<any> {
    return this.http.post<any>(URLS.CREATE_DOMAIN_URL, formData);
  }

  createCourse(formData: FormData): Observable<any> {
    return this.http.post<any>(URLS.CREATE_COURSE_URL, formData);
  }

  createChapter(formData: FormData): Observable<any> {
    return this.http.post<any>(URLS.CREATE_CHAPTER_URL, formData);
  }

  createNotion(formData: FormData): Observable<any> {
    return this.http.post<any>(URLS.CREATE_PARTCHAPTER_URL, formData);
  }

  createSectionCourse(formData: FormData): Observable<any> {
    return this.http.post<any>(URLS.CREATE_DOMAIN_URL, formData);
  }

  getDomainsList(): Observable<any> {
    return this.http.get<any>(URLS.GET_DOMAINS_LIST_URL);
  }

  getDomainExtend(id: string): Observable<any> {
    return this.http.get<any>(URLS.GET_DOMAIN_EXTENDED + id);
  }

  getCoursesListFromDomain(domainId: string): Observable<any> {
    return this.http.get<any>(URLS.GET_COURSES_FROM_DOMAIN_URL + domainId);
  }

  getAllCoursesList(): Observable<any> {
    return this.http.get<any>(URLS.GET_ALL_COURSES_URL);
  }

  getChaptersFromCourses(courseId: string): Observable<any> {
    return this.http.get<any>(URLS.GET_CHAPTERS_FROM_COURSE_URL + courseId);
  }

  getPartsChaptersFromChapter(chapterId: string): Observable<any> {
    return this.http.get<any>(URLS.GET_PARTCHAPTERS_FROM_CHAPTER_URL);
  }

  getCourseExtend(courseId: string): Observable<any> {
    return this.http.get<any>(URLS.GET_COURSE_EXTEND_URL + courseId);
  }

  getExtendChapter(chapterId: string): Observable<any> {
    return this.http.get<any>(URLS.GET_CHAPTER_EXTEND_URL + chapterId);
  }

  getExtendNotion(notionId: string): Observable<any> {
    return this.http.get<any>(URLS.GET_NOTION_EXTEND_URL + notionId);
  }

  getQuestionsCourse(courseId: string): Observable<any> {
    return this.http.get<any>(URLS.GET_QUESTIONS_COURSE + courseId);
  }

  getQuestionsNotion(notionId: string): Observable<any> {
    return this.http.get<any>(URLS.GET_QUESTIONS_NOTION + notionId);
  }

  createQuestionAnswer(formData: FormData): Observable<any> {
    return this.http.post<any>(URLS.CREATE_QUESTION_ANSWER, formData);
  }
}
