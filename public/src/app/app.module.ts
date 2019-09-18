import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EditComponent,
    NewAuthorComponent,
    NewQuoteComponent,
    EditQuoteComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }