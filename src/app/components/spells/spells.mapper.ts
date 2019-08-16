import { SpellModel } from './models/spell.model';
import { MagicSchoolModel } from './models/magic-school.model';

export class SpellsMapper {
  public static mapSpellsListResponse(data) {
    return data.map(elem => {
      const result = new SpellModel();

      result.id = elem.id;
      result.name = elem.name;
      result.description = elem.description;
      result.power = elem.power;
      result.neededMana = elem.neededMana;
      result.neededSchoolLevel = elem.neededSchoolLevel;

      result.magicSchool = new MagicSchoolModel();
      result.magicSchool.id = elem.magicSchool.id;
      result.magicSchool.name = elem.magicSchool.name;
      result.magicSchool.description = elem.magicSchool.description;

      return result;
    });
  }

  public static mapMagicSchoolsListResponse(data) {
    return data.map(elem => {
      const result = new MagicSchoolModel();

      result.id = elem.id;
      result.name = elem.name;
      result.description = elem.description;

      return result;
    });
  }
}
