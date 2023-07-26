import { Component, Input } from '@angular/core';

@Component({
  selector: 'section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component {
  @Input() title: string  = 'Title';
  @Input() content: string = 'Text';
  @Input() InputImage: string = 'Text';

  @Input() isTextFirst: boolean = true;
  @Input() isImageFirst: boolean = false;
}
