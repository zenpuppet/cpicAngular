import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DataModule } from './modules/data/data.module';
import { ListModule } from './modules/list/list.module';
import { CoreModule } from './modules/core/core.module';
import { JiraModule } from './modules/jira/jira.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataModule,
    ListModule,
    CoreModule,
    JiraModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
