import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent  implements OnInit {

  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() link!: string;
  @Input() routerLink!: string;
  constructor() { }

  ngOnInit() {}

  preventCardClick(event: Event) {
    event.stopPropagation();
  }

}
