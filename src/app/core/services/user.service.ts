import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/models';
 
@Injectable({ providedIn: 'root' })
export class UserService {
 
  private api = environment.apiBaseUrl;
 
  constructor(private http: HttpClient) {}
 
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/users`);
  }
 
  createUser(user: Partial<User>): Observable<User> {
    return this.http.post<User>(`${this.api}/auth/register`, user);
  }
 
  updateUser(id: number, user: Partial<User>): Observable<User> {
    return this.http.put<User>(`${this.api}/users/${id}`, user);
  }
 
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/users/${id}`);
  }
}