import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpellModel } from './models/spell.model';
import { SpellsApiMockup } from './spells.api-mockup';
import { SpellsMapper } from './spells.mapper';
import { map } from 'rxjs/operators';
import { MagicSchoolModel } from './models/magic-school.model';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  constructor() { }

  public loadSpellsList(): Observable<SpellModel[]> {
    return SpellsApiMockup.getSpellsList().pipe(map(elem => SpellsMapper.mapSpellsListResponse(elem)));
  }

  public loadMagicSchoolsList(): Observable<MagicSchoolModel[]> {
    return SpellsApiMockup.getMagicSchoolsList().pipe(map(elem => SpellsMapper.mapMagicSchoolsListResponse(elem)));
  }
}
