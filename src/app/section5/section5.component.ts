import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-section5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.scss']
})
export class Section5Component {
  @Input() title: string  = 'Title';
  @Input() content: string = 'Text';
}
