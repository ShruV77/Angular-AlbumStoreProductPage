import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  _albumUrl ="../assets/album.json";
  constructor(private _http: Http) { }

  getAlbum(id: Number){
    return this._http.get(this._albumUrl).map((response) => response.json());
  }

}
