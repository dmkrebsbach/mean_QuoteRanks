import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  author: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.author = {};
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this._httpService.getAuthor(params["id"]).subscribe((author)=>{
        console.log(author);
        this.author = author;
      });
    });
  }

  addVote(quote, num){
    quote.votes += num;
    this._httpService.addVote(quote).subscribe(()=>{});
  }

  deleteQuote(id){
    this._httpService.deleteQuote(id).subscribe((deletedQuote)=>{
      for(let i = 0; i < this.author.quotes.length; i++){
        if(this.author.quotes[i]._id === id){
          this.author.quotes.splice(i, 1);
          break;
        }
      }
    })
  }
}