import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-profile-row',
  imports: [],
  standalone: true,
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.css'
})
export class ProfileRowComponent {
  @Input() name= 'Bubberle';
  @Input() img = '/assets/img/budgies/budgie_green';
  @Input() info = 'Standard Text';

}
