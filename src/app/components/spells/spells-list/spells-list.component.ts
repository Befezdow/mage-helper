import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SpellsService } from '../spells.service';
import { SpellModel } from '../models/spell.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SpellsListComponent implements OnInit {
  private spellsList: SpellModel[] = [];

  constructor(private service: SpellsService) { }

  ngOnInit() {
    // TODO forkJoin doesn't work
    forkJoin(this.service.loadSpellsList(), this.service.loadMagicSchoolsList())
      .subscribe(next => console.log(next));
  }

}
