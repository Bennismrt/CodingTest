import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'

})

export class fatchServices {

    selectedUsers = new BehaviorSubject (null);
    selectedPost = new BehaviorSubject (null);
    
    constructor(
        private _http: HttpClient
    ){}

    getUser(){
        return this._http.get('https://jsonplaceholder.typicode.com/users');
    }

    getPost(){
        return this._http.get('https://jsonplaceholder.typicode.com/posts');
    }

    getComments(id: number | undefined){
        return this._http.get('https://jsonplaceholder.typicode.com/comments?postId=' + id);
    }
}