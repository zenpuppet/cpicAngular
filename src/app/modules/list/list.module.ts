import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssueComponent } from './issue/issue.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ValidationComponent } from './validation/validation.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { NavComponent } from './validation/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  declarations: [IssueComponent, ScheduleComponent, ValidationComponent, DictionaryComponent, NavComponent],
  exports: [IssueComponent, ScheduleComponent, ValidationComponent, DictionaryComponent, NavComponent]
})
export class ListModule { }
