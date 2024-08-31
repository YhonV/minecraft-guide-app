import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-bosses',
  templateUrl: './card-bosses.component.html',
  styleUrls: ['./card-bosses.component.scss'],
})
export class CardBossesComponent  implements OnInit {

  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() tips!: string;
  @Input() isPassive : boolean = false;
  constructor() { }

  ngOnInit() {}

  
}
