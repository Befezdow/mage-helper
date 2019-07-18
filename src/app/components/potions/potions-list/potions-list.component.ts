import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PotionsService } from '../potions.service';

@Component({
  selector: 'app-potions-list',
  templateUrl: './potions-list.component.html',
  styleUrls: ['./potions-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PotionsListComponent implements OnInit {

  constructor(private service: PotionsService) { }

  ngOnInit() {
  }

}
