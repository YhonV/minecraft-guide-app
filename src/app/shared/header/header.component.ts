import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() title!: string;
  @Input() showSearchBar: boolean = false;
  @Input() showBackButton: boolean = false;
  @Output() ionChange = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  onSearchChange(event: any) {
    this.ionChange.emit(event);
  }

}
