import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Form } from '../form'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  readonly ROOT_URL='http://3.140.250.115:5555/swagger-ui/index.html#/';

  
    getUsers():Observable<Form[]>{
      const headers= new HttpHeaders({'header':'header value'})
      
      return this.http.get<Form[]>('http://3.140.250.115:5555/swagger-ui/index.html#/'+'/Form',{headers});
    }
  
}
