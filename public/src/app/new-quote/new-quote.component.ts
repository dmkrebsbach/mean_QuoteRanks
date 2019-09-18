import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  author: any;
  newQuote: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.author = {};
    this.newQuote = {};
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this._httpService.getAuthor(params["id"]).subscribe((author)=>{
        this.author = author;
      });
    });
  }

  createQuote(){
    console.log("grabbed the right author");
    this.newQuote.author = this.author._id;
    console.log(this.author._id);
    this._httpService.createQuote(this.newQuote).subscribe((quote)=>{});
    this._router.navigate(["/author/", this.author._id]);
  }
}