import {MagicSchoolModel} from './magic-school.model';

export class SpellModel {
  id: string;
  name: string;
  description: string;
  damage: number;
  magicSchool: MagicSchoolModel;
}
