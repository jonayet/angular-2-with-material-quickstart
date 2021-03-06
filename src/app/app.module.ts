import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import {NewsFeedComponent} from './components/news-feed';
import {routes} from './app.router';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(routes)
    ],
    declarations: [
        NewsFeedComponent,
        AppComponent
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [ AppComponent ]
})
export class AppModule { }