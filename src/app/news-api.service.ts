import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
api_key= '2f7d5ebd77fb40fe93e3f75155f697a3'
  constructor(private http:HttpClient) {

   }
   initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key);
   }
   initArticles(){
     return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
   }
   getArticlesById(source:string){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
   }
}
