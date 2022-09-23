import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Message, MessageDisplay } from './interfaces/message';
import { MessageService } from './services/message.service';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  messages: any = [];
  username!: string;
  constructor(
    private message: MessageService,
    private cookie: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserID();
    this.connectPusher();
    this.getMessages();
  }

  getMessages(): void {
    this.message.getMessages().subscribe({
      next: (data) => {
        this.sortMessages(data);
        this.scrollBottom();
      },
      error: (err) => {
        console.log(err);
        if (err.status === 401) {
          this.cookie.delete('user');
        }
      },
    });
  }

  connectPusher(): void {
    const pusher = new Pusher('86a4461e82a560d1d849', {
      cluster: 'us2',
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data: Message) => {
      const message = JSON.parse(data.message);
      if (this.messageIsMine(message)) {
        this.pushMessage(message, 'right');
      } else {
        this.pushMessage(message, 'left');
      }
      this.scrollBottom();
    });
  }
  getUserID(): void {
    const {
      user: { username },
    } = JSON.parse(this.cookie.get('user'));
    this.username = username;
  }

  messageIsMine(message: Message): boolean {
    return message.username === this.username ? true : false;
  }

  sortMessages(messages: Array<Message>): void {
    messages.forEach((message) => {
      if (this.messageIsMine(message)) {
        this.pushMessage(message, 'right');
      } else {
        this.pushMessage(message, 'left');
      }
    });
  }

  pushMessage(message: Message, position: string): void {
    this.messages.push({
      date: message.date,
      hour: message.hour,
      id: message.id,
      message: message.message,
      username: message.username,
      username_color: message.username_color,
      justify: position,
    });
  }

  scrollBottom() {
    let messagesContainer = document.getElementById(
      'messagesContainer'
    ) as HTMLElement;
    // messagesContainer.style.backgroundColor = 'red';
    setTimeout(() => {
      let height = messagesContainer.clientHeight;
      messagesContainer.scrollTo(0, height * 5);
    }, 100);
  }
}
