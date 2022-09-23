import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Message } from './interfaces/message';
import { MessageService } from './services/message.service';
import { Toast } from 'src/app/components/toast/models/toast';
import Pusher from 'pusher-js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  messages: any = [];
  username!: string;
  id!: number;
  messageFromInput: string = '';
  toastData: Toast = {
    title: 'Ups!',
    message: '',
    show: false,
    type: 'error',
  };
  constructor(private message: MessageService, private cookie: CookieService) {}

  ngOnInit(): void {
    this.getUserData();
    this.connectPusher();
    this.getMessages();
  }

  animatePlane(): void {
    let plane = document.getElementById('plane') as HTMLElement;
    plane.classList.add('send');
    setTimeout(() => {
      plane.classList.remove('send');
    }, 1000);
  }

  closeToast(value: boolean): void {
    this.toastData.show = value;
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
  getDate(): string {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  getUserData(): void {
    const {
      user: { username, id },
    } = JSON.parse(this.cookie.get('user'));
    this.id = id;
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
    setTimeout(() => {
      let height = messagesContainer.clientHeight;
      messagesContainer.scrollTo(0, height * 5);
    }, 100);
  }

  sendMessage(): void {
    const {
      user: { token },
    } = JSON.parse(this.cookie.get('user'));
    const time = new Date();
    let message = {
      username_id: this.id,
      message: this.messageFromInput,
      date: this.getDate(),
      hour: time.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      }),
      token: token,
    };
    if (this.messageFromInput.trim() !== '') {
      this.message.sendMessage(message).subscribe({
        next: (data) => {
          this.animatePlane();
          this.messageFromInput = '';
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this.toastData.message = 'cant send an empty message';
      this.toastData.show = true;
      setTimeout(() => {
        this.toastData.show = false;
      }, 2000);
    }
  }
}
