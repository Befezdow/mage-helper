import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SpellsService } from '../spells.service';
import { SpellModel } from '../models/spell.model';
import { forkJoin } from 'rxjs';
import {MagicSchoolModel} from '../models/magic-school.model';

@Component({
  selector: 'app-spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SpellsListComponent implements OnInit {
  private spellsList: SpellModel[] = [];
  private magicSchoolsList: MagicSchoolModel[] = [];

  constructor(private service: SpellsService) { }

  ngOnInit() {
    forkJoin(this.service.loadSpellsList(), this.service.loadMagicSchoolsList())
      .subscribe(next => [this.spellsList, this.magicSchoolsList] = next);
  }
}
