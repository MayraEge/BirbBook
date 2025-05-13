import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BudgieCardComponent } from './budgie-card/budgie-card.component';
import { ProposalsComponent } from './proposals/proposals.component';
import { MessageComponent } from './message/message.component';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { ProfileRowComponent } from './profile-row/profile-row.component';
import { FriendBoxComponent} from './friend-box/friend-box.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, BudgieCardComponent, ProposalsComponent, MessageComponent, NgFor, ProfileRowComponent, FriendBoxComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postTexts= [
    'Hallo meine Atzen ich bin Birbine Schnabelina',
    'Picken oder gepickt werden?',
    'Auch n blinder Sittich findet mal n Korn',
    'Lass den Schnabel knacken, bitch!',
    'CHIRP CHIRP MOTHERFUCKER',
    'Wieso ist die Hirse schon wieder leer!!!'
  ];

  postImages = [
    'assets/img/budgies/budgie_blue.jpg',
    'assets/img/budgies/budgie_yellow.jpg',
    'assets/img/budgies/budgie_sassy.jpg',
    'assets/img/budgies/budgie_green.jpg',
    'assets/img/budgies/budgie_asleep.jpg',
    'assets/img/budgies/budgie_white.jpg'
  ];
}
