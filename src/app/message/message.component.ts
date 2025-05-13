import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-message',
  imports: [FormsModule, NgFor],
  standalone: true,
  templateUrl: './message.component.html',
  styleUrl: './message.component.css',
})

  export class MessageComponent {
    newMessage: string = '';
    messages: { text: string, likes: number } [] = [];

    constructor(private messageService: MessageService) {}

    addMessage() {
      if (this.newMessage.trim()) {
        this.messageService.addMessage(this.newMessage);
        this.messages.push( { text: this.newMessage, likes: 0 });
        this.newMessage = '';
      }
    }
    likeMessage(index: number){
      this.messageService.likeMessage(index);
      this.messages = this.messageService.getMessages();
    }
}
