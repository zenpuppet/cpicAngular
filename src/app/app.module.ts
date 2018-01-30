import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataModule } from './data/data.module';
import { ListModule } from './list/list.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

import { ScheduleComponent } from './list/schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataModule,
    ListModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
