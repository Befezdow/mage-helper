import {MagicSchoolModel} from './magic-school.model';

export class SpellModel {
  id: string;
  name: string;
  description: string;
  power: number;
  neededMana: number;
  neededSchoolLevel: number;
  magicSchool: MagicSchoolModel;
}
