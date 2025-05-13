import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-proposals',
  imports: [],
  standalone: true,
  templateUrl: './proposals.component.html',
  styleUrl: './proposals.component.css'
})
export class ProposalsComponent {
  names = [ 'Bubberle', 'Tobias Tobias', 'Texas Pete', 'Bläuer','Werner','Dr. Vogel'];
  info = ['4 Jahre alt', 'Leichtes Übergewicht', 'Baujahr 1989', '7 Jahre alt!','Frisch geschlüpft!','Schreit gerne'];
  images = ['assets/img/budgies/budgie_green','assets/img/budgies/budgie_blue','assets/img/budgies/budgie_yellow', 'assets/img/budgies/budgie_sassy', 'assets/img/budgies/budgie_white','assets/img/budgies/budgie_asleep'];

}
