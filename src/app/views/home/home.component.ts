import { Message } from './interfaces/message';
import { MessageService } from './services/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  messages!: Array<Message>;
  constructor(private message: MessageService) {}

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): void {
    this.message.getMessages().subscribe({
      next: (data) => {
        this.messages = data;
        console.log(this.messages);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
