import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  authors: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  deleteAuthor(id){
    this._httpService.destroyAuthor(id).subscribe((author)=>{
      this.fetchAuthors();
    });
  }

  ngOnInit() {
    this.fetchAuthors();
  }

  fetchAuthors() {
    this._httpService.getAuthors().subscribe((authors)=>{
      this.authors = authors;
    });
  }
}