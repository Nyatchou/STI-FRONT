import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DomainPresentItemComponent } from './components/domain-present-item/domain-present-item.component';
import { DomainPresentGroupComponent } from './components/domain-present-group/domain-present-group.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AddDomainFormComponent } from './components/add-domain-form/add-domain-form.component';
import { AddCourseFormComponent } from './components/add-course-form/add-course-form.component';
import { AddCourseSectionFormComponent } from './components/add-course-section-form/add-course-section-form.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CoursesGroupComponent } from './components/courses-group/courses-group.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { CoursesPresentPageComponent } from './components/courses-present-page/courses-present-page.component';
import { AuthInterceptor } from './helpers/interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoursePresentComponent } from './components/course-present/course-present.component';
import { AddChapterFormComponent } from './components/add-chapter-form/add-chapter-form.component';
import { AddPartChapterFormComponent } from './components/add-part-chapter-form/add-part-chapter-form.component';
import { ChapterPresentPageComponent } from './components/chapter-present-page/chapter-present-page.component';
import { NotionPresentPageComponent } from './components/notion-present-page/notion-present-page.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const appRoutes: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'add_domain', component: AddDomainFormComponent },
  { path: 'add_course', component: AddCourseFormComponent },
  { path: 'add_section', component: AddCourseSectionFormComponent },
  { path: 'add_chapter', component: AddChapterFormComponent },
  { path: 'add_partchap', component: AddPartChapterFormComponent },

  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeLayoutComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'apropos', component: AproposComponent },
      { path: 'domain/:id', component: CoursesPresentPageComponent },
      { path: 'chapter/:id', component: ChapterPresentPageComponent },
      { path: 'notion/:id', component: NotionPresentPageComponent },

    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DomainPresentItemComponent,
    DomainPresentGroupComponent,
    AddDomainFormComponent,
    AddCourseFormComponent,
    AddCourseSectionFormComponent,
    HomeLayoutComponent,
    CoursesGroupComponent,
    CarouselComponent,
    AproposComponent,
    LayoutComponent,
    CoursesPresentPageComponent,
    CoursePresentComponent,
    AddChapterFormComponent,
    AddPartChapterFormComponent,
    ChapterPresentPageComponent,
    NotionPresentPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,

    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(),
    MatDatepickerModule,
    MatSidenavModule,
  ],
  
  providers: [AuthService, {
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor, 
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
