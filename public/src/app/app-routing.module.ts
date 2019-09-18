import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { EditComponent } from './edit/edit.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
// import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [ // these routes should not match the routes in the server file, they will cause ObjectId errors if they are
  {path: 'main', component: MainComponent},
  {path: "authors/edit/:id", component: EditComponent},
  {path: "newauthor", component: NewAuthorComponent},
  {path: "author/:id", component: QuoteComponent},
  // {path: "author/edit/:id", component: EditQuoteComponent},
  {path: "newquote/:id", component: NewQuoteComponent},
  {path: "", pathMatch: "full", redirectTo: "/main"},
  {path: "**", component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }