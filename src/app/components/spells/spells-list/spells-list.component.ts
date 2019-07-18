import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SpellsService } from '../spells.service';

@Component({
  selector: 'app-spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SpellsListComponent implements OnInit {

  constructor(private service: SpellsService) { }

  ngOnInit() {
  }

}
