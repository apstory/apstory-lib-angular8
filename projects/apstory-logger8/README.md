[![Build status](https://apstory.visualstudio.com/ApStory/_apis/build/status/apstorymq-client-angular)](https://apstory.visualstudio.com/ApStory/_build/latest?definitionId=25)

# Apstory Application Insights Logger

## Installation

To install this package run `npm i apstory-logger8`.

## Usage

Add the following to `app.module.ts`

```javascript
import { ApstoryLogger8Module, ApstoryLogger8Service } from 'apstory-logger8';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApstoryLogger8Module.forRoot('instrument key here', 'loggingLevelConsole'),
  ],
  providers: [ApstoryLogger8Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

## Contact

Please contact Apstory on apstoryza@gmail.com if you have any questions.

## Microsoft Application Insights JavaScript SDK

https://www.npmjs.com/package/applicationinsights-js

