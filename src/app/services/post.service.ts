import { Injectable } from "@angular/core";
import {HttpClient, HttpResponse, HttpHeaders} from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class PostService {

    private url:string;

    constructor(
        private _http:HttpClient
    ) {
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    getPost() {
        return this._http.get(this.url);
            //.pipe(map((response:any) => response.json()));
    }

}