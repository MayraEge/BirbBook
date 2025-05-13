import { Component, Input, Inject } from '@angular/core';
import { MessageService } from '../message/message.service';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-budgie-card',
  imports: [],
  standalone: true,
  templateUrl: './budgie-card.component.html',
  styleUrl: './budgie-card.component.css'
})
export class BudgieCardComponent {
  @Input() text: string = '';
  @Input() image: string = '';
  @Input() index: number = 0;

  constructor(@Inject (MessageService) public messageService: MessageService) {
  }

  like() {
    this.messageService.likeMessage(this.index);
  }

  writeMessage() {
    const message = prompt('Schreibe eine Nachricht: ');
    if (message) {
      this.messageService.addMessage(message);
    }
  }
}


