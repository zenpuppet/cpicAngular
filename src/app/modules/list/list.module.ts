import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueComponent } from './issue/issue.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ValidationComponent } from './validation/validation.component';
import { DictionaryComponent } from './dictionary/dictionary.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IssueComponent, ScheduleComponent, ValidationComponent, DictionaryComponent],
  exports: [IssueComponent, ScheduleComponent, ValidationComponent, DictionaryComponent]
})
export class ListModule { }
