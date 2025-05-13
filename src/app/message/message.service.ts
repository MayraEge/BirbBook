import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: { text: string, likes: number }[] = [];

  getMessages() {
    return this.messages;
  }

  addMessage(text: string) {
    this.messages.push({ text, likes: 0 });
  }

  likeMessage(index: number) {
    this.messages[index].likes++;
  }

  constructor() { }
}
