import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.author = {};
    this._route.params.subscribe((params: Params)=>{
      this._httpService.getAuthor(params["id"]).subscribe((author)=>{
        this.author = author;
      });
    });
  }

  editAuthor(){
    this._httpService.editAuthor(this.author).subscribe((author)=>{});
    this._router.navigate(['/main']);
  }
}
