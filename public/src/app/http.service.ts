import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get("/authors"); // the routes in the http.(get/put/post/delete) should match the routes in the routes.js (server) file
  }

  getAuthor(id){
    return this._http.get(`/authors/${id}`);
  }

  editAuthor(author){
    return this._http.put(`/authors/${author._id}`, author);
  }

  destroyAuthor(id){
    return this._http.delete(`/authors/${id}`);
  }

  createAuthor(author){
    return this._http.post("/authors", author);
  }

  addVote(quote){
    return this._http.put(`/quotes/${quote._id}`, quote);
  }

  deleteQuote(id){
    return this._http.delete(`/quotes/${id}`);
  }

  createQuote(quote){
    console.log("made it to the HTTP SERVICE ROUTE");
    console.log(quote.content);
    return this._http.post("/quotes", quote);
  }

  // editQuote(quote){
  //   return this._http.put(`/quotes/${quote._id}`, quote);
  // }
}
