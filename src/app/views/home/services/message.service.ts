import { MessageToSend } from './../interfaces/message';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../interfaces/message';
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  sendMessage(message: MessageToSend) {
    return this.http.post(`${environment.apiURL}/message/create`, message);
  }

  getMessages(): Observable<Array<Message>> {
    return this.http.get<Message[]>(`${environment.apiURL}/message/getAll`);
  }
}
