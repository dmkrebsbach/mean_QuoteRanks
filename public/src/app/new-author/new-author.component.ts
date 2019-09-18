import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  newAuthor: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.newAuthor = {};
  }

  ngOnInit() {

  }

  createNewAuthor(){
    this._httpService.createAuthor(this.newAuthor).subscribe((author)=>{});
    this._router.navigate(['/main']);
  }
}
