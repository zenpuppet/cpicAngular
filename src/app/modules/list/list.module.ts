import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueComponent } from './issue/issue.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ValidationComponent } from './validation/validation.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { NavComponent } from './validation/nav/nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IssueComponent, ScheduleComponent, ValidationComponent, DictionaryComponent, NavComponent],
  exports: [IssueComponent, ScheduleComponent, ValidationComponent, DictionaryComponent, NavComponent]
})
export class ListModule { }
